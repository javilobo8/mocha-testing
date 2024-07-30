
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dce5d59b-00d6-4003-bd1c-62843e682253', () => {
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

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
