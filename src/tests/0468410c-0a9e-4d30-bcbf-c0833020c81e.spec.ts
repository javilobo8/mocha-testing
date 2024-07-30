
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0468410c-0a9e-4d30-bcbf-c0833020c81e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
