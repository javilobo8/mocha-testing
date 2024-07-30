
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 387aa6a9-e480-4b01-bb66-3360d8be7cae', () => {
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

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
