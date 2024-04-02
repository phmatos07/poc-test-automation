import Page from './page.js';

/**
 * Subpágina contendo seletores e métodos específicos para uma página específica
 */
class HomePage extends Page {

  public async start(): Promise<void> {
    await super.openPage();
    await browser.scroll(0, 1000);
    await browser.pause(this.TIME_PAUSE);
    await browser.scroll(0, 0);
    await browser.pause(this.TIME_PAUSE);
  }
}

export default new HomePage();
