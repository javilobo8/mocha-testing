
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 22ab0b1f-9d5a-427f-9204-05e967bbbaaa', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
