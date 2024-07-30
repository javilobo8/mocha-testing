
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4bb7b2f6-c6d8-4b05-8441-fd0e7b8149f7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
