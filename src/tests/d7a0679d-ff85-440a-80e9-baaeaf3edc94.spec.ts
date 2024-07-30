
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d7a0679d-ff85-440a-80e9-baaeaf3edc94', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
