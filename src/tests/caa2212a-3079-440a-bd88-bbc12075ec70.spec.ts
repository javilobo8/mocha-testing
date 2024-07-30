
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - caa2212a-3079-440a-bd88-bbc12075ec70', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
