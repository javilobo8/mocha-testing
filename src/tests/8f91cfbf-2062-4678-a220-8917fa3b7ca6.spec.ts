
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8f91cfbf-2062-4678-a220-8917fa3b7ca6', () => {
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

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
