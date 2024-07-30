
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0cea4156-3d05-41cc-ba26-09d8d5ceeaa6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
