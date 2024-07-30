
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e6870158-77a1-49c9-964a-95e5b3a247bf', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
