
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ac345069-831a-4957-8d4c-c6b85cc13a59', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
