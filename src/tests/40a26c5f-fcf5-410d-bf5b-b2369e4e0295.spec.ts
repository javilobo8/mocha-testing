
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 40a26c5f-fcf5-410d-bf5b-b2369e4e0295', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
