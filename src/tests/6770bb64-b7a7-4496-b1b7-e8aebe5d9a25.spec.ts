
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6770bb64-b7a7-4496-b1b7-e8aebe5d9a25', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
