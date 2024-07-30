
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d60667cf-1a0c-4a25-97f4-94c3e6dbfda8', () => {
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

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
