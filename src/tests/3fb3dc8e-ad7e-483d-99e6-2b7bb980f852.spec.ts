
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3fb3dc8e-ad7e-483d-99e6-2b7bb980f852', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
