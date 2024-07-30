
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e9154bd6-aff6-41f1-87a6-21b23bd64a13', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
