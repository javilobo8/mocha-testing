
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2aacdd91-410b-4350-ad06-37cbd802dd91', () => {
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

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
