
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bca798a6-3048-4763-a0b0-77090edeb898', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
