
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b3e6fa58-ebe0-4f82-a9f7-ceec43154d60', () => {
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

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
