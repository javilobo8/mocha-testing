
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 74c9026d-6bb5-4f0e-b8d7-4e7d1a4cb001', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
