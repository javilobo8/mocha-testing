
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c56c58ad-fe0c-4773-9730-912a9336fe0d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
