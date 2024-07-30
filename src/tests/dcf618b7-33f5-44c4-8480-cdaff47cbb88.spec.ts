
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dcf618b7-33f5-44c4-8480-cdaff47cbb88', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
