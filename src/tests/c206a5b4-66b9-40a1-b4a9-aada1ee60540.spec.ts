
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c206a5b4-66b9-40a1-b4a9-aada1ee60540', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
