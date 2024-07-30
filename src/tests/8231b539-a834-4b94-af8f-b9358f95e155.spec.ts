
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8231b539-a834-4b94-af8f-b9358f95e155', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
