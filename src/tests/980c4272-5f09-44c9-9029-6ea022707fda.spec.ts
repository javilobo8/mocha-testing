
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 980c4272-5f09-44c9-9029-6ea022707fda', () => {
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

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
