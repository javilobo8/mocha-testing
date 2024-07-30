
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 313d705a-50fd-463e-837d-3ec26073d219', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
