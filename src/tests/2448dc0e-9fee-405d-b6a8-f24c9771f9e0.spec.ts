
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2448dc0e-9fee-405d-b6a8-f24c9771f9e0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});