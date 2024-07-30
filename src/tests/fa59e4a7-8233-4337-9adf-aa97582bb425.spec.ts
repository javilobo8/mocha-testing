
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fa59e4a7-8233-4337-9adf-aa97582bb425', () => {
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

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
