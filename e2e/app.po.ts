export class WontfixPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wontfix-app p')).getText();
  }
}
