
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 60199d9e-bc9d-49f3-ad0d-602b5dab3eec', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
