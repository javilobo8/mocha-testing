
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3906322b-c0f1-4552-9e16-70d779174a30', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
