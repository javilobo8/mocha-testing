
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - df5baf73-3bd8-4086-8d95-400b6463b32c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
