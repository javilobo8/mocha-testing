
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fd2fd7cd-acc3-4b01-8090-2f918833e729', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
