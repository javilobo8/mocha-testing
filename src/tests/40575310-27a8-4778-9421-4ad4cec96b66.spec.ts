
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 40575310-27a8-4778-9421-4ad4cec96b66', () => {
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

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
