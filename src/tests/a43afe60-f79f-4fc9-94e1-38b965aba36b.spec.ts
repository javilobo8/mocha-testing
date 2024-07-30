
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a43afe60-f79f-4fc9-94e1-38b965aba36b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
