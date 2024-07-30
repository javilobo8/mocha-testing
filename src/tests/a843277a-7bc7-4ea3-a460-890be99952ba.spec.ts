
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a843277a-7bc7-4ea3-a460-890be99952ba', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
