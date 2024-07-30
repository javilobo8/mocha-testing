
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7c303d2f-c559-48be-b32c-f29d4cc1382b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
