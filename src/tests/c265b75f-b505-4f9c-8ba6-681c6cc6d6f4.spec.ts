
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c265b75f-b505-4f9c-8ba6-681c6cc6d6f4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
