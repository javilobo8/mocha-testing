
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9bc044bb-7d5b-4f85-b5b6-f82667cb75be', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
