
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 87168e15-3cb3-4a01-bdcb-c11020dff444', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});