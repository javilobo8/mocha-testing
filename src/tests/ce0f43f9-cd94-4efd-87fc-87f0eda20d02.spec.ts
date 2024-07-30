
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ce0f43f9-cd94-4efd-87fc-87f0eda20d02', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
