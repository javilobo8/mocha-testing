
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 48867407-6af2-4ad5-8e4a-d128b7083837', () => {
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

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
