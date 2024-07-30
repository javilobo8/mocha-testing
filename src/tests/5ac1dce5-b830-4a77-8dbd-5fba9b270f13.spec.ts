
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5ac1dce5-b830-4a77-8dbd-5fba9b270f13', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
