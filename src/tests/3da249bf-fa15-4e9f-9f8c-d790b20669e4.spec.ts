
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3da249bf-fa15-4e9f-9f8c-d790b20669e4', () => {
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

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
