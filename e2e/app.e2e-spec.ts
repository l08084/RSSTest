import { RssTestPage } from './app.po';

describe('rss-test App', function() {
  let page: RssTestPage;

  beforeEach(() => {
    page = new RssTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
