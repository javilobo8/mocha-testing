
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 00c4892d-9efc-454b-9d8c-4371429a35c0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
