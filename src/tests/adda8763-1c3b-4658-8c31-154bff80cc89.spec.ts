
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - adda8763-1c3b-4658-8c31-154bff80cc89', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
