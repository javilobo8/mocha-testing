
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c340cc52-3627-48fd-bfaa-59199be5175b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
