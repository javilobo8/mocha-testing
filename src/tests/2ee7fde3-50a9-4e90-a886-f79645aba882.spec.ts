
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2ee7fde3-50a9-4e90-a886-f79645aba882', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
