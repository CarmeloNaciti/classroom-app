import { ClassroomAppPage } from './app.po';

describe('classroom-app App', () => {
  let page: ClassroomAppPage;

  beforeEach(() => {
    page = new ClassroomAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
