
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e57eb80a-d2df-4eb0-93db-afafa61154e5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
