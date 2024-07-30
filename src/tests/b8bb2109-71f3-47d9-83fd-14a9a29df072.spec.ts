
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b8bb2109-71f3-47d9-83fd-14a9a29df072', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
