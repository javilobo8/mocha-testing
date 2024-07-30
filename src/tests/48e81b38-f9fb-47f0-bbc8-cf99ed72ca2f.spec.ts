
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 48e81b38-f9fb-47f0-bbc8-cf99ed72ca2f', () => {
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

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
