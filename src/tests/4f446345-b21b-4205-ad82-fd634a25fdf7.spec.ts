
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4f446345-b21b-4205-ad82-fd634a25fdf7', () => {
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

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
