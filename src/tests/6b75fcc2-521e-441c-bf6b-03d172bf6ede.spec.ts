
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6b75fcc2-521e-441c-bf6b-03d172bf6ede', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
