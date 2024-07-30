
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b232486c-4a88-4ff9-80ac-d6478c407ef1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
