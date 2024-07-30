
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b5f91957-114f-4ce0-800f-57725af00dfa', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
