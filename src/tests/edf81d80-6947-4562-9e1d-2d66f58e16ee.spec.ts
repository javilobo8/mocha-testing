
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - edf81d80-6947-4562-9e1d-2d66f58e16ee', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
