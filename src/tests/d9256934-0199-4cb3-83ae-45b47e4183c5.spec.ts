
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d9256934-0199-4cb3-83ae-45b47e4183c5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
