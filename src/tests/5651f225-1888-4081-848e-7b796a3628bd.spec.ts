
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5651f225-1888-4081-848e-7b796a3628bd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
