
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 14aa9eca-f573-44fb-9e06-e939368f1a65', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
