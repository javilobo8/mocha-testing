
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9af7a236-a060-429c-869e-7d8a48ab759d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
