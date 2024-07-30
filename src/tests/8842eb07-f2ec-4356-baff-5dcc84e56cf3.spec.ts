
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8842eb07-f2ec-4356-baff-5dcc84e56cf3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
