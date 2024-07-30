
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 867c2383-4977-4b04-a110-951afbcbbf75', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
