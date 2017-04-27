import { TestAngularcliPage } from './app.po';

describe('test-angularcli App', () => {
  let page: TestAngularcliPage;

  beforeEach(() => {
    page = new TestAngularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
