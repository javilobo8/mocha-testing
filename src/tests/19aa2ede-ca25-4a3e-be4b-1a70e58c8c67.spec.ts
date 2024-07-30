
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 19aa2ede-ca25-4a3e-be4b-1a70e58c8c67', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
