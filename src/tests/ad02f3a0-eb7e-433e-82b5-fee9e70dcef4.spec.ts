
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ad02f3a0-eb7e-433e-82b5-fee9e70dcef4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
