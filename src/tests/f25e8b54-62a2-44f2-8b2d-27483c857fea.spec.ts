
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f25e8b54-62a2-44f2-8b2d-27483c857fea', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
