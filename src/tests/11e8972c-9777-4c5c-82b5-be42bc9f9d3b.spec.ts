
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 11e8972c-9777-4c5c-82b5-be42bc9f9d3b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
