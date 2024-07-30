
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 31cc09fa-7da7-4698-8892-8132497d1df8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
