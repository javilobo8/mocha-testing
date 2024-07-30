
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6b72428c-20e2-4df5-9088-4e7e9f409497', () => {
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

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
