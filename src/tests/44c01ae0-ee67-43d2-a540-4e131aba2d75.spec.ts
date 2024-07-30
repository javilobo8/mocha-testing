
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 44c01ae0-ee67-43d2-a540-4e131aba2d75', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
