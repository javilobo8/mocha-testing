
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cbf40f8f-15b7-41a4-8095-aba14f8f25e2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
