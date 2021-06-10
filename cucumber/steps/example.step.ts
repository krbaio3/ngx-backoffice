import { Given, Then, When } from '@cucumber/cucumber';

import { CalculatorPage } from '../integration/example.po';
import { expect } from 'chai';

const calc = new CalculatorPage();

Given('I have navigated to the calculator', async () => {
  await calc.navigateTo();
});

When(
  'I add two numbers {string} and {string}',
  async (string: number, string2: number) => {
    await calc.setValues(string, string2);
    await calc.goButton.click();
  },
);

Then('the displayed output should be {string}', (string: number) =>
  calc.latestResult.getText().then((text) => expect(text).to.equal(string)),
);
