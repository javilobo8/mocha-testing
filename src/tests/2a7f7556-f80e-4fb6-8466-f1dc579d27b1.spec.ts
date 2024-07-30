
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2a7f7556-f80e-4fb6-8466-f1dc579d27b1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});
