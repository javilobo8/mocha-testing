
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cb0e28ff-6a13-49de-b3a7-191834e524c9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
