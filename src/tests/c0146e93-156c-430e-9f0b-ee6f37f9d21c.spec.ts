
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c0146e93-156c-430e-9f0b-ee6f37f9d21c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
