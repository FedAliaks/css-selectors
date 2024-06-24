import ElementCreator from '../../util/create-element';
import View from '../base-classes/view';
import './table.css';
import { tableElements } from './table-elements';

export default class TableView extends View {
  constructor() {
    super();
    this.elementCreator = this.createView();
  }

  public createView(): HTMLElement {
    const {
      tableElementParameters,
      gameFieldTitleParameters,
      gameFieldParameters,
      gameFieldSurfaceParameters,
    } = tableElements;

    const tableElement = new ElementCreator(tableElementParameters).getElement();
    const gameFieldTitle = new ElementCreator(gameFieldTitleParameters).getElement();
    if (gameFieldTitle) tableElement?.appendChild(gameFieldTitle);

    const gameField = new ElementCreator(gameFieldParameters).getElement();
    const gameFieldSurface = new ElementCreator(gameFieldSurfaceParameters).getElement();
    if (gameFieldSurface) gameField?.appendChild(gameFieldSurface);
    if (gameField) tableElement?.appendChild(gameField);

    return tableElement as HTMLElement;
  }
}
