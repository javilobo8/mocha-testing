
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fefcac4e-6b0a-4444-bb99-e1e9519a4213', () => {
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

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
