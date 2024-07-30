
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2786de5b-e213-4961-a3e5-384efddfb857', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
