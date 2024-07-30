
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fc0a9cab-ba33-4b9f-a5e4-896a83f6ce8a', () => {
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

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
