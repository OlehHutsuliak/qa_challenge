# Test Suite README

## Installation

To install all necessary packages, run:

```bash
npm install
```

## Usage

### Run All Tests

To run all tests, use the following command:

```bash
npm test
```

### Run All Tests in Headed Mode

To run all tests in headed mode (i.e. with the browser window visible), use:

```bash
npm run test:headed
```

### Run Single Test

To run a single test, use the following command, replacing `<testName>` with the name of the specific test:

```bash
npm run test:specific "<testName>"
```

## Reporting

The information about the test run is printed in the terminal using the default Playwright line reporter. Additionally, an HTML report is generated and can be found in the `playwright-report` folder. This HTML report will be opened automatically after the test run (to change this behavior, adjust the "open" option in Playwright config file).

To open the last generated HTML report, run the following command:

```bash
npx playwright show-report
```

To stop serving the report, please press Ctrl+C.

For more information about Playwright reports, refer to the [Playwright documentation on test reporters](https://playwright.dev/docs/test-reporters#html-reporter).
