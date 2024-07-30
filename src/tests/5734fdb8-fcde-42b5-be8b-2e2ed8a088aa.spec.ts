
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5734fdb8-fcde-42b5-be8b-2e2ed8a088aa', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
