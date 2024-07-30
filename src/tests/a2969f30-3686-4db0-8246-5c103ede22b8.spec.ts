
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a2969f30-3686-4db0-8246-5c103ede22b8', () => {
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

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});
