
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cfaf0aa0-4743-4024-bae2-7b85e61f6d50', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
