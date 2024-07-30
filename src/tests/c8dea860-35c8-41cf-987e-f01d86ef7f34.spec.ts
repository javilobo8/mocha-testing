
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c8dea860-35c8-41cf-987e-f01d86ef7f34', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
