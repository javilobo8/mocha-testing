
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1aff0a5a-9ac0-47d1-a0e6-8dbe86712f00', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
