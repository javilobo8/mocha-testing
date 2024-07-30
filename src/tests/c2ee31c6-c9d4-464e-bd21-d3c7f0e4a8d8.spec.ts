
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c2ee31c6-c9d4-464e-bd21-d3c7f0e4a8d8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
