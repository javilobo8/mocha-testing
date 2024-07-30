
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 67de44cb-c62d-45dd-8493-41b0eda95b58', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
