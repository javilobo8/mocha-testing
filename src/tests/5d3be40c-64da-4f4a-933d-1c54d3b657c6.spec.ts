
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5d3be40c-64da-4f4a-933d-1c54d3b657c6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
