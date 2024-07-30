
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4983a16c-8262-44e1-9238-e3245b93675c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
