
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b705c339-0aa0-47af-bda0-984557287bd6', () => {
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

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
