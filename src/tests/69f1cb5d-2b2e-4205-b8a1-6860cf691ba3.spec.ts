
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 69f1cb5d-2b2e-4205-b8a1-6860cf691ba3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
