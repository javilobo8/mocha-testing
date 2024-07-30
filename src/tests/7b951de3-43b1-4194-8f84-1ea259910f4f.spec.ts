
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7b951de3-43b1-4194-8f84-1ea259910f4f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
