
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ebfa9053-e2e8-4bdf-bfa9-8c3b5b72338d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
