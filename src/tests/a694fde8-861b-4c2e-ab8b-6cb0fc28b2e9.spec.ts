
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a694fde8-861b-4c2e-ab8b-6cb0fc28b2e9', () => {
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

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
