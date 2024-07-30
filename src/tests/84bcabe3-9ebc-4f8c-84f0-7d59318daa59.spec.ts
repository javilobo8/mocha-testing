
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 84bcabe3-9ebc-4f8c-84f0-7d59318daa59', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
