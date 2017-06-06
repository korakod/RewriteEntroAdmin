import { RewriteEntroAdminPage } from './app.po';

describe('rewrite-entro-admin App', () => {
  let page: RewriteEntroAdminPage;

  beforeEach(() => {
    page = new RewriteEntroAdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
