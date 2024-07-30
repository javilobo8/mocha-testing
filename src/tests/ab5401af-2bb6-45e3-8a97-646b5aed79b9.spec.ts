
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ab5401af-2bb6-45e3-8a97-646b5aed79b9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
