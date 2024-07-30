
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 75e789a1-d836-459c-b897-829adf0f4e83', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
