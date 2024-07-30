
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e2ffa494-fedd-4363-81d9-d80b30bf0543', () => {
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

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
