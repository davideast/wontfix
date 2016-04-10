import { WontfixPage } from './app.po';

describe('wontfix App', function() {
  let page: WontfixPage;

  beforeEach(() => {
    page = new WontfixPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wontfix Works!');
  });
});
