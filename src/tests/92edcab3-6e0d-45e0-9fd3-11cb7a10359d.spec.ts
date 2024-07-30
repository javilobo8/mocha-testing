
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 92edcab3-6e0d-45e0-9fd3-11cb7a10359d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
