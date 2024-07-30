
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0b4e780c-172c-4eff-8a72-269e30e7634d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
