
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a1f5e829-8b8d-42a3-9f2a-bf27f279c40d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
