import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './VisorBimGisWebPart.module.scss';

export interface IVisorBimGisWebPartProps {
}

export default class VisorBimGisWebPart extends BaseClientSideWebPart<IVisorBimGisWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.visorBimGis}">
        <iframe src="https://dev-activodigitalcemosa.github.io/VisorBimGis/dist/" width="100%" height="600" style="border: none;"></iframe>
      </div>
    `;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
