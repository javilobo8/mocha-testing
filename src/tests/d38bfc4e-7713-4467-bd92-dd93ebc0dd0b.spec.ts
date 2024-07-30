
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d38bfc4e-7713-4467-bd92-dd93ebc0dd0b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
