
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b2e823c4-f425-4236-ad8c-0427ec354471', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
