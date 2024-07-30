
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8e832067-2206-400d-bc64-d5547d857c0b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
