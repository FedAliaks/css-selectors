import GameLogic from '../../game-logic/game-logic';
import SetLevel from '../../game-logic/setLevel';
import ElementCreator from '../../util/create-element';
import View from '../base-classes/view';
import CodeBlockView from '../code-block/code';
import { modalElements } from './modal-elements';
import './modal-window.css';

export default class ModalWindow extends View {
  public createView(): HTMLElement {
    const { modalWindow, window, textForWindow, imageForWindow, buttonModal } = modalElements;

    const element: HTMLElement | null = new ElementCreator(modalWindow).getElement();

    const windowElement = new ElementCreator(window).getElement();

    const textElement = new ElementCreator(textForWindow).getElement();
    if (textElement) windowElement?.appendChild(textElement);

    const imageElement = new ElementCreator(imageForWindow).getElement();
    if (imageElement) windowElement?.appendChild(imageElement);

    const buttonElement = new ElementCreator(buttonModal).getElement();
    buttonElement?.addEventListener('click', this.resetLevels);
    if (buttonElement) windowElement?.appendChild(buttonElement);

    if (windowElement) element?.append(windowElement);

    return element as HTMLElement;
  }

  protected resetLevels(): void {
    SetLevel.setNewLevel(1);
    GameLogic.createGameField(1);
    CodeBlockView.drawMarkupBlock(1);
    const modal = document.querySelector('.overlay');
    modal?.classList.add('overlay_hidden');
  }
}
