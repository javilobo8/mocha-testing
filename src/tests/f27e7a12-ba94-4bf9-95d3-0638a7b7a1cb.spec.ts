
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f27e7a12-ba94-4bf9-95d3-0638a7b7a1cb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
