
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - eee64cc5-16e0-4b94-bb9a-b9c7f2f022c6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
