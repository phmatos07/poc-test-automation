import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * Subpágina contendo seletores e métodos específicos para uma página específica
 */
class StackTracesPage extends Page {

  public get titlePageStackTraces(): ChainablePromiseElement {
    return $('#lab-angular-ngx-title_page_stack_traces-read');
  }

  public get buttonThrowError(): ChainablePromiseElement {
    return $('#lab-angular-ngx-button_throw_error-click');
  }

  public async start(): Promise<void> {
    await this.buttonOpenSidenav.click();
    await this.linkStackTraces.click();
    await this.buttonThrowError.click();
    await browser.pause(this.TIME_PAUSE);
  }

  public async navigateToHome(): Promise<void> {
    await this.linkHome.click();
    await browser.pause(this.TIME_PAUSE);
  }
}

export default new StackTracesPage();
