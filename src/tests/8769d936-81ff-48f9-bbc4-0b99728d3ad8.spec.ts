
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8769d936-81ff-48f9-bbc4-0b99728d3ad8', () => {
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

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
