
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 81a94e93-674a-4b92-aad3-b0112061388b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
