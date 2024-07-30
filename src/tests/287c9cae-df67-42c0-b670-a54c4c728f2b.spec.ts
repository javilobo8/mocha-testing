
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 287c9cae-df67-42c0-b670-a54c4c728f2b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
