
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 071b4e76-aaf9-4a9d-abb8-6b409fbb69c9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
