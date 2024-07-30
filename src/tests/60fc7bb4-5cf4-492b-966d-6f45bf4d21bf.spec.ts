
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 60fc7bb4-5cf4-492b-966d-6f45bf4d21bf', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
