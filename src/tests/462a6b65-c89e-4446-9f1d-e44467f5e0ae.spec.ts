
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 462a6b65-c89e-4446-9f1d-e44467f5e0ae', () => {
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

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
