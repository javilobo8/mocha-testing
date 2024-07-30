
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7508b618-d06e-4f31-ad4d-56904aacd46c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
