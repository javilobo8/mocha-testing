
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 99ef4d7d-027e-4653-a2d9-4057cad6792b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
