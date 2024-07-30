
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8a4b170b-4847-426b-9d6e-13ec03d76330', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
