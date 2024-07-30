
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 71a748c7-6dba-4f6e-a27f-008c919b6689', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
