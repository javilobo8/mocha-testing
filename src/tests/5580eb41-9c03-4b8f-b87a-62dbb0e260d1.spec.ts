
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5580eb41-9c03-4b8f-b87a-62dbb0e260d1', () => {
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

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
