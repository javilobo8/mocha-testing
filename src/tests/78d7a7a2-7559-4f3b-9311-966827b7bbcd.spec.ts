
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 78d7a7a2-7559-4f3b-9311-966827b7bbcd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
