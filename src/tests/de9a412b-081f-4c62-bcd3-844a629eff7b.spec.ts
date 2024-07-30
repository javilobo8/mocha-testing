
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - de9a412b-081f-4c62-bcd3-844a629eff7b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
