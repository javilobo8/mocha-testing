
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f6647254-fa01-438d-8958-ce0dd68c9c45', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
