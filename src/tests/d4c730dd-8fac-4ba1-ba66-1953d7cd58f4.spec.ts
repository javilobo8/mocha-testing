
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d4c730dd-8fac-4ba1-ba66-1953d7cd58f4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
