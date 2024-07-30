
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 38601b56-bded-4efa-8ef9-35938d197809', () => {
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

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
