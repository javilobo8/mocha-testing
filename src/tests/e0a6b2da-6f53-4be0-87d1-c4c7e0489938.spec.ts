
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e0a6b2da-6f53-4be0-87d1-c4c7e0489938', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
