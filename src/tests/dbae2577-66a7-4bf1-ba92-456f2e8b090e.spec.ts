
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dbae2577-66a7-4bf1-ba92-456f2e8b090e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
