
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 056ddc2c-5f83-40aa-a065-7a0401283835', () => {
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

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
