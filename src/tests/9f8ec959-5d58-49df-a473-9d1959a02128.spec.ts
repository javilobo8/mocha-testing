
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9f8ec959-5d58-49df-a473-9d1959a02128', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
