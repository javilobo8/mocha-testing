
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f9f8fab6-2f0b-47b7-8de6-bef71e09ecc0', () => {
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

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
