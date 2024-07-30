
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 12c2969d-b48f-4a87-90f3-0e325191a4af', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
