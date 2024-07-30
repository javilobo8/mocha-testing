
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7a8fbfb7-c2bf-4c9a-9966-141010963760', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
