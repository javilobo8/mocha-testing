
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5197f723-09c9-4c72-bf96-5e6fa1eb4899', () => {
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

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
