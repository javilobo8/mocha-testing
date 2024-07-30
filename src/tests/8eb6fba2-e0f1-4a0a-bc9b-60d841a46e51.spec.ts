
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8eb6fba2-e0f1-4a0a-bc9b-60d841a46e51', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
