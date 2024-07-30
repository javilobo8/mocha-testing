
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3b7974b9-eadd-4f2e-a125-85f8803a98f7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
