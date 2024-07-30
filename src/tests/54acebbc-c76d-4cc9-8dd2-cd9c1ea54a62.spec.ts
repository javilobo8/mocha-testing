
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 54acebbc-c76d-4cc9-8dd2-cd9c1ea54a62', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
