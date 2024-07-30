
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2d6830d3-1229-4e08-b2a1-804ef203758c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
