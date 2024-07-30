
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d87c262c-e59c-4a4c-ab7c-c03e7d1e2370', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});