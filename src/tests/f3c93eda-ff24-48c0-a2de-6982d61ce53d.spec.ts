
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f3c93eda-ff24-48c0-a2de-6982d61ce53d', () => {
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

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
