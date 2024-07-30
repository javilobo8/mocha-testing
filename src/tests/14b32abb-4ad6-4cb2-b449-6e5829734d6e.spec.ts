
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 14b32abb-4ad6-4cb2-b449-6e5829734d6e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
