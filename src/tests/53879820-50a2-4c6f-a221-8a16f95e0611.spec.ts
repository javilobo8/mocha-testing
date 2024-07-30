
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 53879820-50a2-4c6f-a221-8a16f95e0611', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
