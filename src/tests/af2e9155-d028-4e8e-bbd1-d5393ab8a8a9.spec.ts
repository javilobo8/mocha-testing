
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - af2e9155-d028-4e8e-bbd1-d5393ab8a8a9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
