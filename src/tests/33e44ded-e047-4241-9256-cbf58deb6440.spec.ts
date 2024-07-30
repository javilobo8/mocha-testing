
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 33e44ded-e047-4241-9256-cbf58deb6440', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
