
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8fb8206c-4858-466a-80b4-bbc85690fe8b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
