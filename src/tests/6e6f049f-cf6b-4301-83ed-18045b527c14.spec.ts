
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6e6f049f-cf6b-4301-83ed-18045b527c14', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
