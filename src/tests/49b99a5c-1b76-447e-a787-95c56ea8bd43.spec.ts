
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 49b99a5c-1b76-447e-a787-95c56ea8bd43', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
