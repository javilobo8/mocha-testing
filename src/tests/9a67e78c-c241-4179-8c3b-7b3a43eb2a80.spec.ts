
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9a67e78c-c241-4179-8c3b-7b3a43eb2a80', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
