
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2dc570b7-30b7-4ed2-a766-7f549c6b2438', () => {
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

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
