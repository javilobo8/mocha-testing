
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6c321e08-55e7-4210-8d41-7c06bb369404', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
