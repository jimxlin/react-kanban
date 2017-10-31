const expect = require('chai').expect;

describe('React Kanban App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('React Kanban');
  });

  it('Should have three kanban boards', () => {
    browser.url('http://localhost:3000/');

    expect(browser.elements('.board').value.length).to.eql(3);
  });

  it('Should have a card in each board', () => {
    browser.url('http://localhost:3000/');

    expect(browser.elements('#board-0 .card').value.length).to.eql(1);
    expect(browser.elements('#board-1 .card').value.length).to.eql(1);
    expect(browser.elements('#board-2 .card').value.length).to.eql(1);
  });
});
