
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 98e1bf46-67a5-4bb2-a98e-b99aadf01cea', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
