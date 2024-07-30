
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5a694ed8-7667-43d1-9118-1a1cb50db255', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
