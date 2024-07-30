
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 62336a72-f167-4c55-b48a-afbe137b118f', () => {
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

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
