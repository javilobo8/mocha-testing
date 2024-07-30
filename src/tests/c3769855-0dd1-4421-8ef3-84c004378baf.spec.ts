
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c3769855-0dd1-4421-8ef3-84c004378baf', () => {
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

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
