
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 71f2fd7d-57f7-46fd-b735-7a0de6b0a3be', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
