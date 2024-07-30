
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 90c41b4f-1dac-4568-be4e-ba542cb9b9d0', () => {
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

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
