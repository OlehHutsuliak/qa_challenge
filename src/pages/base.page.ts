import { expect, type Locator, type Page } from '@playwright/test';
// import { NavigationBookmarks } from '../enums';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async clickTheButton(element: Locator) {
    await element.click();
  }

  async validateRedirectedUrl(urlOrRegExp: string | RegExp) {
    await expect(this.page).toHaveURL(urlOrRegExp);
  }
}
