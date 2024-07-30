
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f4e333f4-492f-45bd-a7d2-532bc5d7369a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
