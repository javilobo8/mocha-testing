
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0fe827c0-5e2f-497c-8e11-d1652e8606e5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
