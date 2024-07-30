
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8ba05866-092e-45a3-be04-cf0bc840a01f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});
