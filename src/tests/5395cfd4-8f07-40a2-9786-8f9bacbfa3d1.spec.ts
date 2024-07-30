
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5395cfd4-8f07-40a2-9786-8f9bacbfa3d1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
