
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6bae9589-61e0-4664-bbeb-96479e97f198', () => {
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

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
