
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f2e261e0-6986-4c49-aed8-becb4795ac35', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
