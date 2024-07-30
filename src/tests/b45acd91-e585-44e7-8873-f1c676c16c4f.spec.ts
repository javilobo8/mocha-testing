
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b45acd91-e585-44e7-8873-f1c676c16c4f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
