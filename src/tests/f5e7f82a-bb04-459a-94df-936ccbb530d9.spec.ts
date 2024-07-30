
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f5e7f82a-bb04-459a-94df-936ccbb530d9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
