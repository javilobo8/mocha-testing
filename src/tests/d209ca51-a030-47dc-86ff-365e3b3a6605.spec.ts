
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d209ca51-a030-47dc-86ff-365e3b3a6605', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
