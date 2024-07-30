
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 809616fa-3e75-413b-ab19-a67ed4bb6a0d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
