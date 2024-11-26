import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './IfcSimpleWebPart.module.scss';
import { SPHttpClient } from "@microsoft/sp-http";


export interface IIfcSimpleWebPartProps {
  description: string;
}

export default class IfcSimpleWebPart extends BaseClientSideWebPart<IIfcSimpleWebPartProps> {
  public listaObjetos: any[] = [];
  public listaUrl: any[] = [];
  public listaNombres: any[] = [];
  public listaTypes: any[] = [];
  public listaObjetosPrevia: any[] = [];
  public listaNombresPrevia: any[] = [];
  public listaTypesPrevia: any[] = [];
  public contador = 0;
  public render(): void {
    this.domElement.innerHTML = `
    <bim-grid class="${styles.sharepointViewer}" id="sharepoint-viewer"></bim-grid>
   
    `;

  }


  protected onInit() {

    setTimeout(async () => {
      await import(
      // @ts-ignore
      /*webpackIgnore: true*/ "https://dev-activodigitalcemosa.github.io/IFCLoader/dist2/assets/index-D8eWUHJP.js"
      )

      window.dispatchEvent(new Event("resize"));

    }, 1000);


    return new Promise<void>((resolve) => {
      console.log(styles);
      console.log("Hello world");
      resolve();
    });


  }


}
