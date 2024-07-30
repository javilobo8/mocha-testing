
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - db0d428b-f701-4486-9e76-7773222cdd0c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
