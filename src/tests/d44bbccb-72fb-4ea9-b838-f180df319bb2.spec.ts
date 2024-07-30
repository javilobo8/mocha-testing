
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d44bbccb-72fb-4ea9-b838-f180df319bb2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
