
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d0650017-6597-401e-af0e-07f30889c023', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
