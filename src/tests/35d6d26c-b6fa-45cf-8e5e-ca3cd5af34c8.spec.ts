
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 35d6d26c-b6fa-45cf-8e5e-ca3cd5af34c8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
