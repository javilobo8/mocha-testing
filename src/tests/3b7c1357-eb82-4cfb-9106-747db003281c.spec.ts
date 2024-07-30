
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3b7c1357-eb82-4cfb-9106-747db003281c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
