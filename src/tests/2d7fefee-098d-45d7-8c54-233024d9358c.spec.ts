
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2d7fefee-098d-45d7-8c54-233024d9358c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
