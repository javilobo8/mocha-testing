
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - affe6f08-6299-492e-93c9-62b261e2f788', () => {
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

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
