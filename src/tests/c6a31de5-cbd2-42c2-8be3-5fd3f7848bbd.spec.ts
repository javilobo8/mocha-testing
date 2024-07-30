
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c6a31de5-cbd2-42c2-8be3-5fd3f7848bbd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
