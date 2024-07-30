
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b5f59293-3c0c-480c-bb54-8b6639dc15e8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
