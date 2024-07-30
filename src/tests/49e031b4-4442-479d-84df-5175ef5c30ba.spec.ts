
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 49e031b4-4442-479d-84df-5175ef5c30ba', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
