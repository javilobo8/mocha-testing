
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 64ed9e9a-376b-4afa-93d4-b4fd70aec235', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
