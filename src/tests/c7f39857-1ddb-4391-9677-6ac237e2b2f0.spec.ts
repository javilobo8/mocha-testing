
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c7f39857-1ddb-4391-9677-6ac237e2b2f0', () => {
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

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
