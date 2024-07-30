
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 42b6d2f0-aa12-4bd3-a536-9436623786de', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
