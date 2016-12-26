import { FriendshipPage } from './app.po';

describe('friendship App', function() {
  let page: FriendshipPage;

  beforeEach(() => {
    page = new FriendshipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
