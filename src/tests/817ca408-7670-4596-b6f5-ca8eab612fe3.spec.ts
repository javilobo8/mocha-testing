
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 817ca408-7670-4596-b6f5-ca8eab612fe3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
