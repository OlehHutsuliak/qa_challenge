import { Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ESGKPIEnginePage extends BasePage {
  readonly page: Page;
  readonly mainHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.mainHeader = page.getByRole('heading', { name: 'Master ESG KPI management' });
  }
}
