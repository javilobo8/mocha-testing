
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - de1e93b4-ca34-42e4-965c-5c199ba1e476', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
