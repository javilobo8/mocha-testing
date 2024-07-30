
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 77507925-ddbd-4ce7-8603-90d3c98dccc6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
