
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7a8851f6-5335-4f40-b006-bc4dbb499f26', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
