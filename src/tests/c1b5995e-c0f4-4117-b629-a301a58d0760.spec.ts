
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c1b5995e-c0f4-4117-b629-a301a58d0760', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
