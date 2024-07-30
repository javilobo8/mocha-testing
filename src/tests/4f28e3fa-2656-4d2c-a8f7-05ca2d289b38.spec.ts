
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4f28e3fa-2656-4d2c-a8f7-05ca2d289b38', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
