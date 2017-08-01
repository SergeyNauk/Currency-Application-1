import { CurrencyAppPage } from './app.po';

describe('currency-app App', () => {
  let page: CurrencyAppPage;

  beforeEach(() => {
    page = new CurrencyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
