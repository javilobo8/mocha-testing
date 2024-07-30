
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 773b5f30-7bde-402e-ab9c-f62aa88d4d38', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
