
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1470f8fb-7199-4e8e-8201-7b4b822d9551', () => {
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

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
