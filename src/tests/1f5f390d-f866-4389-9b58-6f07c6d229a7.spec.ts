
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1f5f390d-f866-4389-9b58-6f07c6d229a7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
