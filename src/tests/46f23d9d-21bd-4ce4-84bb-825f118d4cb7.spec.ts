
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 46f23d9d-21bd-4ce4-84bb-825f118d4cb7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
