
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b07cab77-375a-4a80-ade0-2439c8fa4a47', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
