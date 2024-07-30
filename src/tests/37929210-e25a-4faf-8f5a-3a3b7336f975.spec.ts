
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 37929210-e25a-4faf-8f5a-3a3b7336f975', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
