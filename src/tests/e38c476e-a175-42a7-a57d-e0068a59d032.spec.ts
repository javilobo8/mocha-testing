
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e38c476e-a175-42a7-a57d-e0068a59d032', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
