
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d7489173-39e3-4dca-a156-4cb8c6751276', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
