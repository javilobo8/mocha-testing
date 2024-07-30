
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0b224a36-2e10-4f3f-b024-3692b6eeba4e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
