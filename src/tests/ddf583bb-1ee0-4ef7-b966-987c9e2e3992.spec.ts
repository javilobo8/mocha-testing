
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ddf583bb-1ee0-4ef7-b966-987c9e2e3992', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
