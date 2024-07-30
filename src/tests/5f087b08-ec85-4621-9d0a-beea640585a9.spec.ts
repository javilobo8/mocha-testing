
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5f087b08-ec85-4621-9d0a-beea640585a9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
