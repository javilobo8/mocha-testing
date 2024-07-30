
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 142af2fe-f85e-49ca-a4ac-f749a8848066', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
