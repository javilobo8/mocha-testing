
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b96e06d1-ca18-4e78-a1cd-0afeb926bf3c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
