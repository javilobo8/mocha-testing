
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a552eb68-e222-4ca7-9276-6c608374e41c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
