const expect = require('chai').expect;

describe('React Kanban App', () => {
  const boardIds = ['#board-0', '#board-1', '#board-2'];
  const cardName = 'testCard';

  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('React Kanban');
  });

  it('Should initially have three kanban boards', () => {
    browser.url('http://localhost:3000/');

    expect(browser.elements('.board').value.length).to.equal(3);
  });

  it('Should initally have a card in each board', () => {
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
      expect(browser.element(boardId).isExisting(`p=${cardName}`)).to.be.true;
    });
  });

  it('Should delete cards', () => {
    browser.url('http://localhost:3000/');
    const board = browser.element(boardIds[0]);

    board.element('input').setValue(cardName);
    board.click('.add-card-btn');
    expect(board.isExisting(`p=${cardName}`)).to.be.true;

    board.element(`p=${cardName}`).element('..').click('.delete-card-btn');
    expect(board.isExisting(`p=${cardName}`)).to.be.false;
  });

  it ('Should move cards left', () => {
    browser.url('http://localhost:3000/');
    const board = browser.element(boardIds[1]);
    const leftBoard = browser.element(boardIds[0]);

    board.element('input').setValue(cardName);
    board.click('.add-card-btn');
    board.element(`p=${cardName}`).element('..').click('.move-card-left-btn');

    expect(board.isExisting(`p=${cardName}`)).to.be.false;
    expect(leftBoard.isExisting(`p=${cardName}`)).to.be.true;
  });

  it ('Should move cards right', () => {
    browser.url('http://localhost:3000/');
    const board = browser.element(boardIds[1]);
    const rightBoard = browser.element(boardIds[2]);

    board.element('input').setValue(cardName);
    board.click('.add-card-btn');
    board.element(`p=${cardName}`).element('..').click('.move-card-right-btn');

    expect(board.isExisting(`p=${cardName}`)).to.be.false;
    expect(rightBoard.isExisting(`p=${cardName}`)).to.be.true;
  });
});
