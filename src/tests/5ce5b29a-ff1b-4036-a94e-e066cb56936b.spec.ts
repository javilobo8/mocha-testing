
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5ce5b29a-ff1b-4036-a94e-e066cb56936b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
