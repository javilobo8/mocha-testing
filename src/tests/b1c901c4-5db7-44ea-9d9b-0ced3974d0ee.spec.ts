
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b1c901c4-5db7-44ea-9d9b-0ced3974d0ee', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
