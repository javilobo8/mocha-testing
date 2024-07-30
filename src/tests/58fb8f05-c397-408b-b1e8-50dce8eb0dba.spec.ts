
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 58fb8f05-c397-408b-b1e8-50dce8eb0dba', () => {
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

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
