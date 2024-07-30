
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d4dd5e0a-b828-4f9d-b5d7-92f7283bfcd9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
