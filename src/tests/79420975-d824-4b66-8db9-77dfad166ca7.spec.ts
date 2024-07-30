
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 79420975-d824-4b66-8db9-77dfad166ca7', () => {
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

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
