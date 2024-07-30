
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e9cf4f76-70fd-4071-ab9e-27e97460aa27', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});
