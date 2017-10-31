const expect = require('chai').expect;

describe('React Kanban App', () => {
  const boardIds = ['#board-0', '#board-1', '#board-2'];
  const cardName = 'testCard';

  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('React Kanban');
  });

  it('Should have three kanban boards', () => {
    browser.url('http://localhost:3000/');

    expect(browser.elements('.board').value.length).to.equal(3);
  });

  it('Should have a card in each board', () => {
    browser.url('http://localhost:3000/');

    boardIds.forEach(boardId => {
      expect(browser.elements(`${boardId} .card`).value.length).to.equal(1);
    });
  });

  it('Should create a card in the target board', () => {
    browser.url('http://localhost:3000/');

    boardIds.forEach(boardId => {
      browser.element(`${boardId} input`).setValue(cardName);
      browser.click(`${boardId} .add-card-btn`);
      expect(browser.element(boardId).element(`p=${cardName}`).type).to.not.equal('NoSuchElement');
    });
  });

  it('Should delete cards', () => {
    browser.url('http://localhost:3000/');
    const board = browser.element(boardIds[0]);

    board.element('input').setValue(cardName);
    board.click('.add-card-btn');
    expect(board.element(`p=${cardName}`)).to.not.equal('NoSuchElement');

    board.element(`p=${cardName}`).element('..').click('.delete-card-btn');
    expect(board.element(`p=${cardName}`).type).to.equal('NoSuchElement');
  });

  it ('Should move cards left', () => {
    browser.url('http://localhost:3000/');
    const board = browser.element(boardIds[1]);
    const leftBoard = browser.element(boardIds[0]);

    board.element('input').setValue(cardName);
    board.click('.add-card-btn');
    board.element(`p=${cardName}`).element('..').click('.move-card-left-btn');

    expect(board.element(`p=${cardName}`).type).to.equal('NoSuchElement');
    expect(leftBoard.element(`p=${cardName}`).type).to.not.equal('NoSuchElement');
  });

  it ('Should move cards right', () => {
    browser.url('http://localhost:3000/');
    const board = browser.element(boardIds[1]);
    const rightBoard = browser.element(boardIds[2]);

    board.element('input').setValue(cardName);
    board.click('.add-card-btn');
    board.element(`p=${cardName}`).element('..').click('.move-card-right-btn');
    
    expect(board.element(`p=${cardName}`).type).to.equal('NoSuchElement');
    expect(rightBoard.element(`p=${cardName}`).type).to.not.equal('NoSuchElement');
  });
});
