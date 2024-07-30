
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1340cd84-1ea5-42c3-a3f5-8beb6db45c85', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
