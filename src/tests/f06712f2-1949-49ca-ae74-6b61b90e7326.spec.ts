
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f06712f2-1949-49ca-ae74-6b61b90e7326', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
