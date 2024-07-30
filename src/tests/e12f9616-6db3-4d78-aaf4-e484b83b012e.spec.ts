
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e12f9616-6db3-4d78-aaf4-e484b83b012e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
