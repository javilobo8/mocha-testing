
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0aea6ba3-353f-4661-aa36-d2219cdcac2a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
