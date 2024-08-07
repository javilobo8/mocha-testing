
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 600557e6-194e-422e-a91e-a6b6e14eda3f', () => {
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

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
