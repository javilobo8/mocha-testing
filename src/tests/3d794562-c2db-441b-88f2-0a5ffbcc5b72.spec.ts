
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3d794562-c2db-441b-88f2-0a5ffbcc5b72', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});