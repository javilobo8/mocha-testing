
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1f4e49b0-fd21-4c0d-a213-2737d12f785c', () => {
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

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
