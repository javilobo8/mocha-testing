
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0bc44443-c744-479a-bc06-210384402c14', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
