
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1b7af6ea-39dc-4114-b69c-dd9b97cb00dc', () => {
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

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
