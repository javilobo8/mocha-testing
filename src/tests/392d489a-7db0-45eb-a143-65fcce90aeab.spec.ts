
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 392d489a-7db0-45eb-a143-65fcce90aeab', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
