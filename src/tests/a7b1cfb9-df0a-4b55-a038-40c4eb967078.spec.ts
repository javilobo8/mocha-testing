
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a7b1cfb9-df0a-4b55-a038-40c4eb967078', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
