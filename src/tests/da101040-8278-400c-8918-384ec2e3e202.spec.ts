
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - da101040-8278-400c-8918-384ec2e3e202', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
