
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f54ca53c-b8c3-4221-bc6e-a5b91e1ccc6c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
