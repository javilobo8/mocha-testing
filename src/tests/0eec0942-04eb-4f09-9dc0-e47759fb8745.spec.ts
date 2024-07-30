
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0eec0942-04eb-4f09-9dc0-e47759fb8745', () => {
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

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
