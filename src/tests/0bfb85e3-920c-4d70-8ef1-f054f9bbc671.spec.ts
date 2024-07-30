
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0bfb85e3-920c-4d70-8ef1-f054f9bbc671', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
