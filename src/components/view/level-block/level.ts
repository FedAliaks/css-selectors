import './level.css';
import ElementCreator, { ElementParameters } from '../../util/create-element';
import View from '../base-classes/view';
import { levelElements } from './level-elements';
import SetLevel from '../../game-logic/setLevel';
import GameField from '../table/game-field-table/game-field-table';
import CodeBlockView from '../code-block/code';

export default class LevelView extends View {
  public element: HTMLElement;

  constructor() {
    super();
    this.element = this.createView();
  }

  createView(): HTMLElement {
    const { levelBlockParameter, levelButton } = levelElements;

    const levelDivBlock = new ElementCreator(levelBlockParameter).getElement();

    for (let i = 1; i < 11; i += 1) {
      const levelParam: ElementParameters = {
        tag: 'div',
        classNames: ['level'],
        textContent: `${i}`,
        attributes: {
          id: `${i}`,
        },
      };

      const levelNumberElement = new ElementCreator(levelParam).getElement();
      if (levelDivBlock && levelNumberElement) levelDivBlock.appendChild(levelNumberElement);
    }

    const levelButtonBlock = new ElementCreator(levelButton).getElement();
    levelButtonBlock?.addEventListener('click', this.resetLevel);

    if (levelButtonBlock) levelDivBlock?.appendChild(levelButtonBlock);
    levelDivBlock?.addEventListener('click', this.clickOnLevelBlock);

    return levelDivBlock as HTMLElement;
  }

  static addColorForLevels(levelCurrent: number): void {
    const LEVELS = document.querySelectorAll('.level');
    LEVELS.forEach((item) => {
      item.classList.remove('level_current', 'level_completed', 'level_future');
      if (+item.id === levelCurrent) item.classList.add('level_current');
      if (+item.id < levelCurrent) item.classList.add('level_completed');
      if (+item.id > levelCurrent) item.classList.add('level_future');
    });
  }

  clickOnLevelBlock(e: Event) {
    const target = e.target as Element;
    if (target.classList.contains('level')) {
      SetLevel.setNewLevel(+target.id);
      GameField.addElementOnTheGameTable(+target.id);
      CodeBlockView.drawMarkupBlock(+target.id);
    }
  }

  resetLevel(): void {
    SetLevel.setNewLevel(1);
    GameField.addElementOnTheGameTable(1);
    CodeBlockView.drawMarkupBlock(1);
  }
}
