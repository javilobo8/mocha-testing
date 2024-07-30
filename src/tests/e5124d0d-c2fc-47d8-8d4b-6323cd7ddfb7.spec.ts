
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e5124d0d-c2fc-47d8-8d4b-6323cd7ddfb7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
