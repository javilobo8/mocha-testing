
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0d51bf86-9fec-472b-9f36-ccb076b43610', () => {
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

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
