
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2fec7c53-22ce-4e76-a106-83fe2d2686bd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
