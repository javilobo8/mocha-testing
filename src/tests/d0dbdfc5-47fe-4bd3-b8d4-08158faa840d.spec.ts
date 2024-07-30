
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d0dbdfc5-47fe-4bd3-b8d4-08158faa840d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
