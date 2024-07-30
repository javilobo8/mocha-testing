
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9b3b4733-c2e7-4b62-b9e3-175a2e2cb40d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
