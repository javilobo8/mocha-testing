
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b36e79f2-8a29-4e4b-908b-1dcd6722379b', () => {
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

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
