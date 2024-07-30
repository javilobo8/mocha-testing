
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a0b71c64-7663-4c60-91d4-1332b5132ec9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
