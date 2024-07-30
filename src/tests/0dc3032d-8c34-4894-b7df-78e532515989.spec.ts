
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0dc3032d-8c34-4894-b7df-78e532515989', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});
