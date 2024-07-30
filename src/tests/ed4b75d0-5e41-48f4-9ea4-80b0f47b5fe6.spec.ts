
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ed4b75d0-5e41-48f4-9ea4-80b0f47b5fe6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});
