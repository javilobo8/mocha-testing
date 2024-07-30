
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 20c76cf0-872e-471a-8860-3fd787d30cab', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
