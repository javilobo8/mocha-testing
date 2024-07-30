
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8fcb1090-7c17-467a-bc0f-94b53fc1e446', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
