
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a9e349d1-dd25-4d94-8c1d-31c41f720c28', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
