
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ead25e4f-2b85-4d94-84ad-90112709df8b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
