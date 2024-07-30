
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ef5a23bf-0f16-446b-970d-290197d3cdeb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
