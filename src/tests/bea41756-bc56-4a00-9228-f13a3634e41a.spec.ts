
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bea41756-bc56-4a00-9228-f13a3634e41a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
