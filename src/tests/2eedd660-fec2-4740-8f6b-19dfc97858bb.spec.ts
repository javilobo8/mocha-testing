
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2eedd660-fec2-4740-8f6b-19dfc97858bb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
