
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 25f5d8e4-8f02-4088-a7c7-410b5a6bff36', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
