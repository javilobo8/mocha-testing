
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3855ae2f-7e1a-4102-95dc-8a183088a1d1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
