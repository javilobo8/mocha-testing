
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4004dedc-3bf3-47b3-b734-9e0277c3b3ae', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
