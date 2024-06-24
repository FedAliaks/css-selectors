import GameLogic from '../game-logic/game-logic';
import SetLevel from '../game-logic/setLevel';
import { CodeButtons } from '../view/code-block/buttons/buttons';
import CodeBlockView from '../view/code-block/code';
import FooterView from '../view/footer/footer-view';
import LevelView from '../view/level-block/level';
import ModalWindow from '../view/modal-window/modal-window';
import TableView from '../view/table/table';

export default class App {
  constructor() {}

  public start(): void {
    this.createView();
  }

  createView(): void {
    const mainElement = document.createElement('main');
    document.body.append(this.createModalWindow());
    mainElement.classList.add('main');
    mainElement.append(this.createTableBlock(), this.createCodeBlock(), this.createLevelBlock());
    document.body.append(mainElement, this.createFooter());

    this.createGameField();

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        CodeButtons.checkAnswer();
      }
    });
  }

  createModalWindow(): HTMLElement {
    const element = new ModalWindow();
    return element.getHTMLElement();
  }

  createGameField(): void {
    this.getSetInfoFromLocalStorage();
    const level = SetLevel.getCurrentLevel();
    GameLogic.createGameField(level);
    CodeBlockView.drawMarkupBlock(level);
  }

  createFooter(): HTMLElement {
    const element = new FooterView();
    return element.getHTMLElement();
  }

  createLevelBlock(): HTMLElement {
    const element = new LevelView();
    return element.getHTMLElement();
  }

  createTableBlock(): HTMLElement {
    const element = new TableView();
    return element.getHTMLElement();
  }

  createCodeBlock(): HTMLElement {
    const element = new CodeBlockView();
    return element.getHTMLElement();
  }

  private getSetInfoFromLocalStorage(): void {
    window.addEventListener('load', () => {
      const startLevel = localStorage.getItem('savedLevel') ?? 1;
      if (startLevel) {
        SetLevel.setNewLevel(+startLevel);
        GameLogic.createGameField(+startLevel);
        CodeBlockView.drawMarkupBlock(+startLevel);
      }
    });

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('savedLevel', String(SetLevel.getCurrentLevel()));
    });
  }
}
