
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f3bbc57a-72c2-4ed2-bf35-786e4404b789', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
