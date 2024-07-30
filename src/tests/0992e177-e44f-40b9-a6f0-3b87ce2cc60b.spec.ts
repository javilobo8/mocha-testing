
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0992e177-e44f-40b9-a6f0-3b87ce2cc60b', () => {
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

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
