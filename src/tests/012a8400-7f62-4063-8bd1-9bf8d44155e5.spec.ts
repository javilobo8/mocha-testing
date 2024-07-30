
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 012a8400-7f62-4063-8bd1-9bf8d44155e5', () => {
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

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
