
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - afa2ddd5-d0c9-4ba8-8aa4-469d04c29b3f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
