
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2753848e-1324-4dec-9e5d-ab2fbe0e5e03', () => {
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

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
