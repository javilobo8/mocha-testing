
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c0d7dce2-8c22-4a70-9701-b3a5ab7c6ae5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
