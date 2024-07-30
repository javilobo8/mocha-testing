
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 751b1b29-d577-4f66-a646-2df5168a67e3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
