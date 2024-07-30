
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 80cea04a-bbed-44e0-8264-ca74b44ca178', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
