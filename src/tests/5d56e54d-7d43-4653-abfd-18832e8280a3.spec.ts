
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5d56e54d-7d43-4653-abfd-18832e8280a3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
