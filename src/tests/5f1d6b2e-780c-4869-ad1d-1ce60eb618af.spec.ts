
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5f1d6b2e-780c-4869-ad1d-1ce60eb618af', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
