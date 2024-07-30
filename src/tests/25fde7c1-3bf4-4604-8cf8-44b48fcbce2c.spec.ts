
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 25fde7c1-3bf4-4604-8cf8-44b48fcbce2c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
