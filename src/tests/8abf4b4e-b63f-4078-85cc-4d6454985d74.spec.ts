
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8abf4b4e-b63f-4078-85cc-4d6454985d74', () => {
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

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
