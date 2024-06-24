import GameLogic from '../../../game-logic/game-logic';
import SetLevel from '../../../game-logic/setLevel';
import ElementCreator from '../../../util/create-element';
import LevelView from '../../level-block/level';
import { arrayLevels } from '../../start-information/levels-array';
import CodeBlockView from '../code';
import { buttonElements } from './buttons-elements';
import './buttons.css';

export class CodeButtons {
  constructor() {}

  static createButtonsCSSCodeBlock(): (HTMLElement | null)[] {
    const { buttonParameters, buttonHelpParameters } = buttonElements;
    const codeArray = [];

    const checkAnswerBtn = new ElementCreator(buttonParameters).getElement();
    checkAnswerBtn?.addEventListener('click', CodeButtons.checkAnswer);

    codeArray.push(checkAnswerBtn);

    const helpBtn = new ElementCreator(buttonHelpParameters).getElement();
    helpBtn?.addEventListener('click', CodeButtons.clickBtnHelp);
    codeArray.push(helpBtn);

    return codeArray;
  }

  static clickBtnHelp(): void {
    const currentLevel = SetLevel.getCurrentLevel();
    const answer = arrayLevels[currentLevel - 1].answer[0];
    const inputField = document.querySelector('.input') as HTMLInputElement;
    if (inputField) inputField.classList.remove('css-input');
    let valueInInput = '';

    let i: number = 0;
    typePrinter();

    function typePrinter(): void {
      if (i < answer.length) {
        valueInInput += answer[i];
        if (inputField) inputField.value = valueInInput;
        i += 1;
        const timerId = setTimeout(typePrinter, 300);
        if (i === answer.length) clearTimeout(timerId);
      }
    }
  }

  static checkAnswer(): void {
    let currentVariantForAnswer: string;

    const inputField = document.querySelector('.input') as HTMLInputElement;
    if (inputField) currentVariantForAnswer = inputField.value;

    const currentLevel = SetLevel.getCurrentLevel();
    const answerArray = arrayLevels[currentLevel - 1].answer;

    let isFlagAnswer = false;

    answerArray.forEach((item) => {
      if (item === currentVariantForAnswer) {
        isFlagAnswer = true;
        GameLogic.addAnimationForWin();
        setTimeout(() => {
          SetLevel.setNewLevel(currentLevel + 1);
          const level = SetLevel.getCurrentLevel();
          GameLogic.createGameField(level);
          CodeBlockView.drawMarkupBlock(level);
          LevelView.addColorForLevels(level);
          inputField.value = '';
          if (inputField) inputField.classList.add('css-input');
        }, 500);
      }
    });

    if (!isFlagAnswer) {
      inputField.value = '';
      const codeElement = document.querySelector('.code');
      if (codeElement) {
        codeElement.classList.add('shake');
        setTimeout(() => codeElement.classList.remove('shake'), 1000);
      }
    }
  }
}
