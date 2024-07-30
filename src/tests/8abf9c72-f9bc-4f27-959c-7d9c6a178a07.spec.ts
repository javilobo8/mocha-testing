
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8abf9c72-f9bc-4f27-959c-7d9c6a178a07', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
