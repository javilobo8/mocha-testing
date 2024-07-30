
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ca09c725-cab1-4748-8e7b-3f6942ae3838', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
