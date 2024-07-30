
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cdac04af-5485-404d-b442-5f061a69d82a', () => {
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

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
