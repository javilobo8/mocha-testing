
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ab3d3ab9-9259-4cdf-a851-a5eecf6a0c1e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
