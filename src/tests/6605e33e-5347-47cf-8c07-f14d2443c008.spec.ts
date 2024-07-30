
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6605e33e-5347-47cf-8c07-f14d2443c008', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
