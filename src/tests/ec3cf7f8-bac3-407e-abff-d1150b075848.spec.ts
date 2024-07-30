
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ec3cf7f8-bac3-407e-abff-d1150b075848', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
