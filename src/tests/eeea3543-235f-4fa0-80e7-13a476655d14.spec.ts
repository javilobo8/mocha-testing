
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - eeea3543-235f-4fa0-80e7-13a476655d14', () => {
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

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
