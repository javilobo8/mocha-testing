
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 61776e7b-d158-4abf-891d-6379d98bad60', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
