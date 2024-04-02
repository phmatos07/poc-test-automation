import { browser } from '@wdio/globals';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

  public readonly TIME_PAUSE = 2000;

  public get buttonOpenSidenav(): ChainablePromiseElement {
    return $('#lab-angular-ngx-open_sidenav-click');
  }

  public get linkHome(): ChainablePromiseElement {
    return $('#lab-angular-ngx-home-click');
  }

  public get linkStackTraces(): ChainablePromiseElement {
    return $('#lab-angular-ngx-stack-traces-click');
  }

  /**
  * Opens a sub page of the page
  * @param path path of the sub page (e.g. /path/to/page.html)
  */
  public openPage(path?: string): Promise<string> {

    let url = '';

    if (path) {
      browser.getUrl().then((_url) => url = `${_url}/${path}`);
    }
    return browser.url(url);
  }
}
