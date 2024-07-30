
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8e852722-1db3-4bfd-81be-acfe6b6039ca', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
