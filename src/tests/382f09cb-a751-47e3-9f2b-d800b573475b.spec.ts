
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 382f09cb-a751-47e3-9f2b-d800b573475b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
