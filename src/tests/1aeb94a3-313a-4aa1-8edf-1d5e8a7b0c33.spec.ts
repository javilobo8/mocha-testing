
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1aeb94a3-313a-4aa1-8edf-1d5e8a7b0c33', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
