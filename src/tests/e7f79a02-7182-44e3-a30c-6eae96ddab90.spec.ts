
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e7f79a02-7182-44e3-a30c-6eae96ddab90', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
