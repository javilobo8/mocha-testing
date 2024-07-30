
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c31c99f2-68b8-46ac-b6e7-aa767103f607', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
