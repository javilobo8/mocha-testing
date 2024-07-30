
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3f6e5ae2-f489-4e2a-b725-69d864cc9b1e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
