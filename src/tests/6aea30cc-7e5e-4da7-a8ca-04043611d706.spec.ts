
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6aea30cc-7e5e-4da7-a8ca-04043611d706', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
