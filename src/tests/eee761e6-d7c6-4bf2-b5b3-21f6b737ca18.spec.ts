
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - eee761e6-d7c6-4bf2-b5b3-21f6b737ca18', () => {
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

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
