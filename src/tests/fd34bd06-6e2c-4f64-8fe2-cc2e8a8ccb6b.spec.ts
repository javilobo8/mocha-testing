
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fd34bd06-6e2c-4f64-8fe2-cc2e8a8ccb6b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
