
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 746048cb-6714-4cec-9f84-1b004c40b61c', () => {
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

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
