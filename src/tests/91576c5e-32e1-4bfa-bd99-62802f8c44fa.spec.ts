
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 91576c5e-32e1-4bfa-bd99-62802f8c44fa', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
