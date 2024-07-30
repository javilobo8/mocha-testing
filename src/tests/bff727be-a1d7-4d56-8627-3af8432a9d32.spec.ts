
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bff727be-a1d7-4d56-8627-3af8432a9d32', () => {
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

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
