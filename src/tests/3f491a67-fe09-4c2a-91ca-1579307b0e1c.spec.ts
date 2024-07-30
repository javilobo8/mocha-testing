
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3f491a67-fe09-4c2a-91ca-1579307b0e1c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
