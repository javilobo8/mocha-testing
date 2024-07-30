
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b2f55b9a-e243-41bd-b5ff-7d2269079a1e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
