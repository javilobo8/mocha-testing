
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 10fe6d59-d75f-47d5-a033-5305ea7601a6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
