
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 39d0082b-973a-49db-b333-4b550fa58926', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
