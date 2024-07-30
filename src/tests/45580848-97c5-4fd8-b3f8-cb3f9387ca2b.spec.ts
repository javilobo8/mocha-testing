
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 45580848-97c5-4fd8-b3f8-cb3f9387ca2b', () => {
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

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
