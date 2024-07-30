
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 48120f28-28e0-4ba4-8c0b-e26e3c2fb422', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
