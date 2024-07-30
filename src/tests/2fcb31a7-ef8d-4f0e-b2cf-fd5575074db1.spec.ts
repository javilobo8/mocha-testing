
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2fcb31a7-ef8d-4f0e-b2cf-fd5575074db1', () => {
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

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
