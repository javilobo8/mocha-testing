
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 216f903a-815c-49a6-a808-9672ecd7e211', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
