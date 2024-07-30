
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 63036079-f585-4ef3-a4e6-1d59046418d1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
