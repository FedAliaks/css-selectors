export default abstract class View {
  elementCreator: HTMLElement;

  constructor() {
    this.elementCreator = this.createView();
  }

  getHTMLElement() {
    return this.elementCreator;
  }

  abstract createView(): HTMLElement;
}
