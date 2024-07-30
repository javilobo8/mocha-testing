
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3f486d9f-3bd8-444e-96d4-c3116a0ca0f9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
