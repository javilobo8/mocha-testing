
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5a8e45dd-ca4f-439b-9119-e3b6e066b64a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
