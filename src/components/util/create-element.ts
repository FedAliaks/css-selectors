export type AttributeObject = Record<string, string>;

export interface ElementParameters {
  tag: string;
  classNames?: string[];
  textContent?: string;
  callback?: Function;
  attributes?: AttributeObject;
  tooltip?: string;
  numberNode?: number;
}

export default class ElementCreator {
  element: HTMLElement | null;

  constructor(param: ElementParameters) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param: ElementParameters) {
    this.element = document.createElement(param.tag);

    if (this.element) {
      if (param.classNames) {
        this.setCssClasses(param.classNames);
      }

      if (param.textContent) {
        this.setTextContent(param.textContent);
      }

      if (typeof param.callback === 'function') {
        this.setCallback(param.callback);
      }

      if (param.numberNode) {
        this.setDataAttribute('numberNode', String(param.numberNode));
      }

      if (param.tooltip) {
        this.setDataAttribute('title', param.tooltip);
      }

      if (param.attributes) {
        this.setAttributes(param.attributes);
      }
    }
  }

  getElement() {
    return this.element;
  }

  setDataAttribute(attrName: string, name: string): void {
    if (this.element) {
      this.element.setAttribute(attrName, name);
    }
  }

  setCssClasses(stylesArray: string[]) {
    if (stylesArray && this.element) {
      stylesArray.forEach((item) => {
        if (this.element) {
          this.element.classList.add(item);
        }
      });
    }
  }

  setTextContent(text: string) {
    if (text && this.element) {
      this.element.textContent = text;
    }
  }

  setCallback(callback: Function) {
    if (this.element) {
      this.element.addEventListener('click', (event: Event) => callback(event));
    }
  }

  setAttributes(objAttributes: AttributeObject) {
    if (this.element) {
      for (const key in objAttributes) {
        this.element.setAttribute(key, objAttributes[key]);
      }
    }
  }
}
