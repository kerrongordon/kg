import { KerrongordonPage } from './app.po';

describe('kerrongordon App', function() {
  let page: KerrongordonPage;

  beforeEach(() => {
    page = new KerrongordonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
