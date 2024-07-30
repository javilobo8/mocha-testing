
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - daeeb56a-0cd7-457b-8b85-a2f6eee710d4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
