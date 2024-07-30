
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 17117b5d-417e-4966-b7b1-5fd8cf347a61', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});