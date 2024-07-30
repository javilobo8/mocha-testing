
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 59a97e7b-c42a-4bfc-ba5d-13a600031037', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
