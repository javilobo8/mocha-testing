
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 400d0d81-9a35-4b6d-bcc2-31f1615916cb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
