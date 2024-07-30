
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f1570801-6a05-4763-8f77-e13db278c601', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
