
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7dc3b639-38ff-410e-8db4-6fd178266ff1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
