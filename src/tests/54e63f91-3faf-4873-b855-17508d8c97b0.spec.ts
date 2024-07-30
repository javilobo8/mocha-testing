
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 54e63f91-3faf-4873-b855-17508d8c97b0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
