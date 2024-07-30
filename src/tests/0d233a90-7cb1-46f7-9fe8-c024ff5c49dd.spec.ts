
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0d233a90-7cb1-46f7-9fe8-c024ff5c49dd', () => {
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

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
