
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4fb52ef6-b2f8-4a42-8c2e-299927bd11a4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
