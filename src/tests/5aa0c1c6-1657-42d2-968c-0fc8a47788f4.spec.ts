
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5aa0c1c6-1657-42d2-968c-0fc8a47788f4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
