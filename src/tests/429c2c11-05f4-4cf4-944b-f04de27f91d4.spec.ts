
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 429c2c11-05f4-4cf4-944b-f04de27f91d4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
