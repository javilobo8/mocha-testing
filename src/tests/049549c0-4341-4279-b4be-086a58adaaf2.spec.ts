
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 049549c0-4341-4279-b4be-086a58adaaf2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
