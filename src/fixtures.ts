import { test as base } from '@playwright/test';
import { MainPage } from './pages/main.page';
import { ContactUsPage } from './pages/contactUs.page';
import { ESGKPIEnginePage } from './pages/esgkpiEngine.page';

interface Fixtures {
  mainPage: MainPage;
  contactUsPage: ContactUsPage;
  esgkpiEnginePage: ESGKPIEnginePage;
}

export const test = base.extend<Fixtures>({
  mainPage: async ({ page }, use) => {
    await page.goto('https://www.sapfioneer.com/');
    const mainPage = new MainPage(page);
    await mainPage.acceptCookies();
    await use(mainPage);
  },
  contactUsPage: async ({ page }, use) => {
    const contactUsPage = new ContactUsPage(page);
    await use(contactUsPage);
  },
  esgkpiEnginePage: async ({ page }, use) => {
    const esgkpiEnginePage = new ESGKPIEnginePage(page);
    await use(esgkpiEnginePage);
  },
});
