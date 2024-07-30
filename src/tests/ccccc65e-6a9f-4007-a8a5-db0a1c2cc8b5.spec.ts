
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ccccc65e-6a9f-4007-a8a5-db0a1c2cc8b5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
