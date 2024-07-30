
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b3d2ca6b-fae4-4e66-b793-fc25e3cf9615', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
