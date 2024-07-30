
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 74ebf39c-5441-4686-bd1e-4985ebfc5eec', () => {
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

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
