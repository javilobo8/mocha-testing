
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7fa91ba8-4934-44db-8372-5cb867ce4506', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
