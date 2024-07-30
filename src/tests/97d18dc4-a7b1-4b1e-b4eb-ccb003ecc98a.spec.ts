
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 97d18dc4-a7b1-4b1e-b4eb-ccb003ecc98a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
