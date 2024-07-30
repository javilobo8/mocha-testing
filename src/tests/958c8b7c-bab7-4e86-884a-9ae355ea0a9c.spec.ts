
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 958c8b7c-bab7-4e86-884a-9ae355ea0a9c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
