
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7717a406-acdb-4456-88e7-e28873124b4b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
