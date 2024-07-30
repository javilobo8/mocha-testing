
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fc194f0d-d3bc-45b8-9737-ddf443e7a84f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
