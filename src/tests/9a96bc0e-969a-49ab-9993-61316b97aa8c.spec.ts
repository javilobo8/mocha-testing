
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9a96bc0e-969a-49ab-9993-61316b97aa8c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
