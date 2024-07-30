
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2cf1324e-534a-41be-ad43-efe23666cba5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
