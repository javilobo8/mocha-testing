
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b44ab9d5-0d82-4ff7-970a-20ac68e53d5e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
