
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7b33cee0-5d98-4d2b-a1ff-b51e966455d9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
