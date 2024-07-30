
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3a718c7c-9f8e-41bb-8138-d5fd62fcec4c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
