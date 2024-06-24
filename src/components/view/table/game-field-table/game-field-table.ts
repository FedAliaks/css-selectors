import './game-field-table.css';
import LevelView from '../../level-block/level';
import { arrayLevels } from '../../start-information/levels-array';
import ElementCreator from '../../../util/create-element';
import SetLevel from '../../../game-logic/setLevel';

export default class GameField {
  public static addElementOnTheGameTable(level: number): void {
    const gameField: HTMLElement | null = document.querySelector('.game-field__surface');
    if (gameField) gameField.innerHTML = '';

    const gameFieldTitle = document.querySelector('.table__title');
    if (gameFieldTitle) {
      gameFieldTitle.innerHTML = arrayLevels[level - 1].title;
    }

    if (gameField) {
      arrayLevels[level - 1].tableItems.forEach((item) => {
        if (!Array.isArray(item)) {
          const element = new ElementCreator(item).getElement() as HTMLElement;
          if (element) element.addEventListener('mouseover', this.startHoverOnTheElements);
          if (element) element.addEventListener('mouseout', this.finishHoverOnTheElements);
          if (element) gameField.appendChild(element);
        } else {
          const parentElement = new ElementCreator(item[0]).getElement() as HTMLElement;
          if (parentElement) parentElement.addEventListener('mouseover', (e: Event) => this.startHoverOnTheElements(e));
          if (parentElement) parentElement.addEventListener('mouseout', this.finishHoverOnTheElements);

          item.forEach((subitem, index) => {
            if (index > 0) {
              const childElement = new ElementCreator(subitem).getElement();
              if (childElement) childElement.addEventListener('mouseover', this.startHoverOnTheElements);
              if (childElement) childElement.addEventListener('mouseout', this.finishHoverOnTheElements);
              if (childElement) parentElement.appendChild(childElement);
            }
          });

          gameField.appendChild(parentElement);
        }
      });
    }
    LevelView.addColorForLevels(SetLevel.getCurrentLevel());
  }

  protected static startHoverOnTheElements(e: Event): void {
    const target = e.target as HTMLElement;
    if (target) {
      const targetAttribute = target.getAttribute('numberNode');
      const elementsMarkup = document.querySelectorAll('.html-line-code');
      elementsMarkup.forEach((item) => {
        if (item.getAttribute('numberNode') === targetAttribute) {
          item.classList.add('html-line-code_colored');
        }
      });
    }
  }

  protected static finishHoverOnTheElements(): void {
    const elementsMarkup = document.querySelectorAll('.html-line-code');
    elementsMarkup.forEach((item) => {
      item.classList.remove('html-line-code_colored');
    });
  }
}
