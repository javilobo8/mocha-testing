
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 744549a7-2a18-4c6e-ba29-8acf065b8822', () => {
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

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
