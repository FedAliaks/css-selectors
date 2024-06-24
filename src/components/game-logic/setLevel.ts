export default class SetLevel {
  static currentLevel: number = 1;

  constructor() {}

  static getCurrentLevel(): number {
    return this.currentLevel;
  }

  static setNewLevel(level: number) {
    if (level > 10) {
      const modal = document.querySelector('.overlay');
      modal?.classList.remove('overlay_hidden');
    } else {
      this.currentLevel = level;
    }
  }
}
