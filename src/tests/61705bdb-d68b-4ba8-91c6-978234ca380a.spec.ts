
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 61705bdb-d68b-4ba8-91c6-978234ca380a', () => {
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

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
