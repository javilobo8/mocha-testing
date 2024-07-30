
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f2253db0-a2ff-4647-847d-4f2eae35990b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
