
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2f465b16-c547-4b19-a312-09011a8a83e9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
