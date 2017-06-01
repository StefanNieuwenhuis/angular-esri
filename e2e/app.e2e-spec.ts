import { AngularEsriPage } from './app.po';

describe('angular-esri App', () => {
  let page: AngularEsriPage;

  beforeEach(() => {
    page = new AngularEsriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
