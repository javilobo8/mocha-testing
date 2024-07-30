
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 03b72849-f10d-43a3-894a-bf30e40874a1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
