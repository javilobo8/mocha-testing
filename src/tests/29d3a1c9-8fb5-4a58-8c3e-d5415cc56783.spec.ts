
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 29d3a1c9-8fb5-4a58-8c3e-d5415cc56783', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
