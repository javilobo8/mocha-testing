
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 031872a4-e657-4635-bb97-234c42c772ac', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
