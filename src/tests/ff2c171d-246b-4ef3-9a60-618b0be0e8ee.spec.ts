
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ff2c171d-246b-4ef3-9a60-618b0be0e8ee', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
