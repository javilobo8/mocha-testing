
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8206e7e3-f1b7-491f-8d89-41f86802f5ac', () => {
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

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
