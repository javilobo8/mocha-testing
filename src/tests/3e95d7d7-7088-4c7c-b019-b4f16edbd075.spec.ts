
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3e95d7d7-7088-4c7c-b019-b4f16edbd075', () => {
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

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
