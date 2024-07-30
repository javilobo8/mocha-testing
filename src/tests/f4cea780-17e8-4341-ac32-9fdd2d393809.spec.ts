
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f4cea780-17e8-4341-ac32-9fdd2d393809', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
