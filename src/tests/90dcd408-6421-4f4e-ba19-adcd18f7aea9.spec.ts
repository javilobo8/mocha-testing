
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 90dcd408-6421-4f4e-ba19-adcd18f7aea9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
