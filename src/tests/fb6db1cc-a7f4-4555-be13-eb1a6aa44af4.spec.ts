
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fb6db1cc-a7f4-4555-be13-eb1a6aa44af4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
