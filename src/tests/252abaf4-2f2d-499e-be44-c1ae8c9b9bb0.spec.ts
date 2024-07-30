
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 252abaf4-2f2d-499e-be44-c1ae8c9b9bb0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
