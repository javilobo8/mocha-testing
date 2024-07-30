
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f71a8f3d-6eb8-41ef-9b8c-c708a39f266f', () => {
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

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
