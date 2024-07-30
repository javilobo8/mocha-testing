
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6b5cdcc8-6e24-4d77-a901-2f9913bd03dd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
