
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 71378ec3-7909-46bf-8d2e-65ee0a48fa3a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
