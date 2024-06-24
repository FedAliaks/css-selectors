import GameField from '../view/table/game-field-table/game-field-table';

export default abstract class GameLogic {
  static createGameField(level: number) {
    GameField.addElementOnTheGameTable(level);
  }

  static addAnimationForWin() {
    const animationsElements = document.querySelectorAll('.goal');
    animationsElements.forEach((item) => {
      item.classList.add('animationAfterWin');
    });
  }
}
