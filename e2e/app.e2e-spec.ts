import { PipeUpperPage } from './app.po';

describe('pipe-upper App', function() {
  let page: PipeUpperPage;

  beforeEach(() => {
    page = new PipeUpperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
