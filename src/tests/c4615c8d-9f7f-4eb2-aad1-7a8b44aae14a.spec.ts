
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c4615c8d-9f7f-4eb2-aad1-7a8b44aae14a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
