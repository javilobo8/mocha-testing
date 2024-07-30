
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fe0cf7dd-c8c1-4e87-b33f-22ed044f2150', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
