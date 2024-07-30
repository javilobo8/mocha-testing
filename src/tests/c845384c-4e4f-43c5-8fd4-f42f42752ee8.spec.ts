
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c845384c-4e4f-43c5-8fd4-f42f42752ee8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
