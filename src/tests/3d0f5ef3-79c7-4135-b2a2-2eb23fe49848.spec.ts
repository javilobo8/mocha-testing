
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3d0f5ef3-79c7-4135-b2a2-2eb23fe49848', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
