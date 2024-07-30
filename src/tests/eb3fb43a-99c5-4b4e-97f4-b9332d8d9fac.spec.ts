
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - eb3fb43a-99c5-4b4e-97f4-b9332d8d9fac', () => {
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

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
