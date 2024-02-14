import { FrameLocator, type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ContactUsPage extends BasePage {
  readonly page: Page;
  readonly mainHeader: Locator;
  readonly formFrame: FrameLocator;
  readonly emailBox: Locator;
  readonly emailInputFiled: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.mainHeader = page.getByRole('heading', { name: 'Contact Us' });
    this.formFrame = page.frameLocator('#hs-form-iframe-0');
    this.emailBox = this.formFrame.locator('.hs-email');
    this.emailInputFiled = this.formFrame.locator('input[name="email"]');
  }

  async fillInputFiled(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async getValidationMessageText(locator: Locator) {
    const alertElement = locator.getByRole('alert');
    await expect(alertElement).toBeVisible();
    const message = await alertElement.innerText();
    return message;
  }
}
