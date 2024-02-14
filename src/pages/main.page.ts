import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
  readonly page: Page;
  readonly navigationBar: Locator;
  readonly headerGetInTouchButton: Locator;
  readonly getInTouchButtons: Promise<Locator[]>;
  readonly financeAndESGBookmark: Locator;
  readonly acceptCookiesButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.navigationBar = page.getByRole('navigation');
    this.headerGetInTouchButton = this.navigationBar.getByRole('link', { name: 'Get in touch' });
    this.getInTouchButtons = page.getByRole('link', { name: 'Get in touch' }).all();
    this.financeAndESGBookmark = this.navigationBar.getByRole('link', { name: 'Finance & ESG' });
    this.acceptCookiesButton = page.getByRole('link', { name: 'Accept' });
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }

  async expandNavigationTab(element: Locator) {
    await element.hover();
  }

  async selectTab(elementName: string) {
    await this.page.getByRole('link', { name: elementName }).click();
  }
}
