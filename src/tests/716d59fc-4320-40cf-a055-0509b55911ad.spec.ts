
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 716d59fc-4320-40cf-a055-0509b55911ad', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
