
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c3b6d566-da81-470f-89c2-aad0eba9f585', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
