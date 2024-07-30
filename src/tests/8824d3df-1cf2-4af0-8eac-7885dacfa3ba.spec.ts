
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8824d3df-1cf2-4af0-8eac-7885dacfa3ba', () => {
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

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
