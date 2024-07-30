
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b6b170a0-66cf-44cc-ba95-8ecb8c6fcd88', () => {
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

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});
