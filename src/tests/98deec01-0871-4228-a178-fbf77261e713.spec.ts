
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 98deec01-0871-4228-a178-fbf77261e713', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
