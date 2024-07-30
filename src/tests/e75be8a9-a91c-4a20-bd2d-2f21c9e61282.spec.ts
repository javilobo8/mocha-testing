
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e75be8a9-a91c-4a20-bd2d-2f21c9e61282', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
