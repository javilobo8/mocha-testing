
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2935e986-06ae-4341-b01d-722941ff088c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
