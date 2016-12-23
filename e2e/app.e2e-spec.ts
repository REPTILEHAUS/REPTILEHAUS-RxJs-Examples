import { ReptilehausRxjsNg2Page } from './app.po';

describe('reptilehaus-rxjs-ng2 App', function() {
  let page: ReptilehausRxjsNg2Page;

  beforeEach(() => {
    page = new ReptilehausRxjsNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
