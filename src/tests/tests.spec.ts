import { expect, Locator } from '@playwright/test';
import { test } from '../fixtures';
import { convertHexToRGB } from '../helpers/helper';
import { FinanceAndESGProducts } from '../enums';

test('Rendering the right color of "Get in touch" button', async ({ mainPage }) => {
  let headerGetInTouchButton: Locator;
  let contentGetInTouchButton: Locator;

  const expectedHEXColor = '#ffd43c';
  const RGBColors = convertHexToRGB(expectedHEXColor);
  const RGBColorsString = `rgb(${RGBColors.red}, ${RGBColors.green}, ${RGBColors.blue})`;

  const getInTouchButtons = await mainPage.getInTouchButtons;
  // eslint-disable-next-line prefer-const
  [headerGetInTouchButton, contentGetInTouchButton] = getInTouchButtons;
  await expect(headerGetInTouchButton).toHaveCSS('background-color', RGBColorsString);
  await expect(contentGetInTouchButton).toHaveCSS('background-color', RGBColorsString);
});

test('Redirection Accuracy: ESG KPI Engine -> SAP Fioneer', async ({ mainPage, esgkpiEnginePage }) => {
  await mainPage.expandNavigationTab(mainPage.financeAndESGBookmark);
  await mainPage.selectTab(FinanceAndESGProducts.ESGKPIEngine);
  await esgkpiEnginePage.validateRedirectedUrl(/esg-kpi-engine/);
  await expect(esgkpiEnginePage.mainHeader).toBeVisible();
});

test('Invalid Email Validation', async ({ mainPage, contactUsPage }) => {
  const expectedValidationMessage = 'Email must be formatted correctly.';
  const invalidEmail = '342323';

  await mainPage.clickTheButton(mainPage.headerGetInTouchButton);
  await contactUsPage.validateRedirectedUrl(/contact/);
  await expect(contactUsPage.mainHeader).toBeVisible();

  await contactUsPage.fillInputFiled(contactUsPage.emailInputFiled, invalidEmail);
  const validationMessage = await contactUsPage.getValidationMessageText(contactUsPage.emailBox);
  expect(validationMessage).toBe(expectedValidationMessage);
});
