
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e2e45a7b-73d9-45ec-a103-d7c1f8380011', () => {
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

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});
