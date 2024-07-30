
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8ab33ff3-7365-44b6-9ee4-c9e9596d5ff1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
