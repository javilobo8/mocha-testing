
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 15bfb854-9a20-4df7-a29b-73afdac84eac', () => {
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

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
