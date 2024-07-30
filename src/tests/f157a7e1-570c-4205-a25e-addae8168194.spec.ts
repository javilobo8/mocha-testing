
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f157a7e1-570c-4205-a25e-addae8168194', () => {
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

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
