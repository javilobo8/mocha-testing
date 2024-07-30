
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bd90839a-f73f-4217-ab71-b3d24427098c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
