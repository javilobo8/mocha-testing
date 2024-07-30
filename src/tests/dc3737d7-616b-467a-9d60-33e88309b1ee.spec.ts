
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dc3737d7-616b-467a-9d60-33e88309b1ee', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
