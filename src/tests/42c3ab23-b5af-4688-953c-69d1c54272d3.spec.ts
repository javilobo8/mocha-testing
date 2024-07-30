
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 42c3ab23-b5af-4688-953c-69d1c54272d3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
