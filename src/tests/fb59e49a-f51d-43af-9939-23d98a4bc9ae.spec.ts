
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fb59e49a-f51d-43af-9939-23d98a4bc9ae', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
