
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2315f0ca-6df3-4446-9a44-4cc61738860c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
