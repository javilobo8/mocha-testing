
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 70d47a4b-85ce-4cf5-a83c-2e89f1b93c6a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
