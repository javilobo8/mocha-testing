
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ba128c94-c4e6-4058-b0d7-5b33f3acf7aa', () => {
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

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
