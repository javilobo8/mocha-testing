
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1f6a0acc-ce2f-426d-8a86-cd9ac582b085', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
