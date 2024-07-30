
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 21b00636-c585-4f40-ab2b-d0af2e9dc01e', () => {
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

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
