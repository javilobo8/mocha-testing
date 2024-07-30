
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0ef98e4f-7708-4e8a-9d59-44e008f9a1aa', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
