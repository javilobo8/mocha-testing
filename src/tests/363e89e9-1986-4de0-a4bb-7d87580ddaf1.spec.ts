
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 363e89e9-1986-4de0-a4bb-7d87580ddaf1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
