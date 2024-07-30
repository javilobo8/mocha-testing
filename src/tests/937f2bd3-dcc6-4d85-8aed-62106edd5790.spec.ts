
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 937f2bd3-dcc6-4d85-8aed-62106edd5790', () => {
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

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
