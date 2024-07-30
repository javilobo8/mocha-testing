
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8dc974e5-10e0-49b0-9b1b-7d66e8461a8f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
