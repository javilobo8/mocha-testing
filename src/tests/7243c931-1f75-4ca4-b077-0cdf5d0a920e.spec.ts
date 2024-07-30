
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7243c931-1f75-4ca4-b077-0cdf5d0a920e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
