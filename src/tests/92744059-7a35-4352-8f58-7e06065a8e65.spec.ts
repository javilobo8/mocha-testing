
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 92744059-7a35-4352-8f58-7e06065a8e65', () => {
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

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
