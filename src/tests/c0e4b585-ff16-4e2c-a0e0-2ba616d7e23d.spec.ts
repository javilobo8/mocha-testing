
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c0e4b585-ff16-4e2c-a0e0-2ba616d7e23d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
