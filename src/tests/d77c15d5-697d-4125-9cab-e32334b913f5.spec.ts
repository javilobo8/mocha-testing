
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d77c15d5-697d-4125-9cab-e32334b913f5', () => {
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

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
