
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f01b71a4-9507-4787-8221-a3fad6ca5ba8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});