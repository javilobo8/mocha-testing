
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ddb7b08a-6068-4d05-97e2-6ab87692d107', () => {
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

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
