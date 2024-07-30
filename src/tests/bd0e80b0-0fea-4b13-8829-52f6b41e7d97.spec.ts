
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bd0e80b0-0fea-4b13-8829-52f6b41e7d97', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
