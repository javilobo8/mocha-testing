
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 021e0845-1fe8-4a7a-90af-884e9c8c19b8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
