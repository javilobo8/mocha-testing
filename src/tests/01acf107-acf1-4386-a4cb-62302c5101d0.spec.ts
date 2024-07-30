
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 01acf107-acf1-4386-a4cb-62302c5101d0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
