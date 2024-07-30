
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 89e6bce3-15cc-4245-aabd-48db14084779', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
