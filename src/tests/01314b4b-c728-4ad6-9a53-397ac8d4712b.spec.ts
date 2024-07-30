
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 01314b4b-c728-4ad6-9a53-397ac8d4712b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
