
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0fcf41bb-cdec-4b0e-b62f-99c26ba8d688', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
