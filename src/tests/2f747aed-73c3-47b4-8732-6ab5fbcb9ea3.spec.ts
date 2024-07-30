
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2f747aed-73c3-47b4-8732-6ab5fbcb9ea3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
