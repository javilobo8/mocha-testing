
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9534acda-c689-4fc3-9075-cddfc4a3a1b4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
