
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 75977fd6-1725-4821-9c69-2deabee85543', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
