
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f7ef5e10-1674-43e0-b250-f0e8811e0311', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
