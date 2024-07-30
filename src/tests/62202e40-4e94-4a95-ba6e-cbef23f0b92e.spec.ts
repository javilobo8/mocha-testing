
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 62202e40-4e94-4a95-ba6e-cbef23f0b92e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
