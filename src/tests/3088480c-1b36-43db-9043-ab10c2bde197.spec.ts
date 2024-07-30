
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3088480c-1b36-43db-9043-ab10c2bde197', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
