import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  types = {
    departamento: 'dep',
    provincia: 'pro',
    distrito: 'dis'
  }

  departamentos = []
  provincias    = []
  distritos     = []
  dataInitial   = []

  fileContent   : string = '';
  condition     = false;
  constructor() { }

  /*
  Metodo se activa al cargar el archivo
  */
  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;

    fileReader.onloadend = function () {
      self.fileContent = fileReader.result as string;
      let lines = self.fileContent.split('\n');
      lines.forEach(element => {
        let arrayContent: string[] = element.split("/");
        let arrayContentClear = []
        arrayContent.forEach(element => {
          if (element.trim() != '') {
            arrayContentClear.push(element)
          }
        });
        self.dataInitial.push(arrayContentClear)
      });
      self.llenarData();
    }
    fileReader.readAsText(file);
  }


  setDataArray(value : any, type : string) {
    if (type && value) {
      let arrHijo   : string[]
      let arrPadre  : string[]
      let arrNivel0 : string[]
      let objItem   : { codigo: any; descripcion?: string; codigoDepartamento?: string; descripcionDepartamento?: string; codigoProvincia?: string; descripcionProvincia?: string; }   ;

      if (type === this.types.departamento) {
        arrHijo = this.detectFirstSpace(value[0].trim())
        objItem = { codigo: arrHijo[0], descripcion: arrHijo[1] };
        if (!this.existInArray(this.departamentos, objItem.codigo)) {
          this.departamentos.push(objItem);
        }
      } else if (type === this.types.provincia) {
        arrHijo   = this.detectFirstSpace(value[1].trim())
        arrPadre  = this.detectFirstSpace(value[0].trim())
        objItem   = { codigo: arrHijo[0], descripcion: arrHijo[1], codigoDepartamento: arrPadre[0], descripcionDepartamento: arrPadre[1] };
        if (!this.existInArray(this.provincias, objItem.codigo)) {
          this.provincias.push(objItem);
        }
      } else if (type === this.types.distrito) {
        arrHijo   = this.detectFirstSpace(value[2].trim())
        arrNivel0 = this.detectFirstSpace(value[1].trim())
        arrPadre  = this.detectFirstSpace(value[0].trim())
        objItem   = { codigo: arrHijo[0], descripcion: arrHijo[1], codigoDepartamento: arrPadre[0], descripcionDepartamento: arrPadre[1], codigoProvincia: arrNivel0[0], descripcionProvincia: arrNivel0[1] };
        if (!this.existInArray(this.distritos, objItem.codigo)) {
          this.distritos.push(objItem);
        }
      }
    }
  }

  llenarData() {
    let indicador = 0;
    this.dataInitial.forEach((item) => {
      this.setDataArray(item, this.types.departamento);
      indicador = item.length;
      switch (indicador) {
        case 2:
          this.setDataArray(item, this.types.provincia);
          break;
        case 3:
          this.setDataArray(item, this.types.distrito);
          break;
        default:
          break;
      };
    })

    this.condition = true;
  }

  existInArray(array: any, codDepartamento: string) {
    let c = 0;
    array.forEach((item) => {
      if (item.codigo === codDepartamento) {
        c++;
      }
    })
    return (c > 0)
  }
  
  detectFirstSpace(text : string){
    let arrayClean = []
    for (let i = -1; (i = text.indexOf(' ', i + 1)) != -1; i++) {
      arrayClean.push(text.substring(0,i));
      arrayClean.push(text.substring(i + 1, text.length));
    }
    return arrayClean;
  }
}
