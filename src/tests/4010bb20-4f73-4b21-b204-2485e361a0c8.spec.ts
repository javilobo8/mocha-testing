
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4010bb20-4f73-4b21-b204-2485e361a0c8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
