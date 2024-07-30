
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 10c60c8b-4ec7-4620-b266-0cd66ac9be07', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
