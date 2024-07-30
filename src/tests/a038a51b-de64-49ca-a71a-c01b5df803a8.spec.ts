
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a038a51b-de64-49ca-a71a-c01b5df803a8', () => {
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

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
