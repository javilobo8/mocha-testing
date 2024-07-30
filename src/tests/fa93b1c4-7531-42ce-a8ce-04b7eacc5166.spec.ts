
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fa93b1c4-7531-42ce-a8ce-04b7eacc5166', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
