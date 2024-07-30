
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9be20fd8-4b57-414a-ba0b-a651d74f21c9', () => {
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

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
