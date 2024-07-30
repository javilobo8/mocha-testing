
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8b9d9cc8-44b9-4623-aabc-a8eb3079a72b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
