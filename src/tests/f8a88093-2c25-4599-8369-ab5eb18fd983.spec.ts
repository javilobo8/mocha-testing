
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f8a88093-2c25-4599-8369-ab5eb18fd983', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
