
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a360a1a8-6a64-47ef-98b1-20bdfd7aae6e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
