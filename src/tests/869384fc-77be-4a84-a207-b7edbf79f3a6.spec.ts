
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 869384fc-77be-4a84-a207-b7edbf79f3a6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
