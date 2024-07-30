
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cdf0c926-0674-477b-9ed8-8545f5f1e71c', () => {
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

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
