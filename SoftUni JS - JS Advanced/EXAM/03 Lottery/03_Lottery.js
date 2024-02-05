const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number" ||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
  checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }
    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;
    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }
    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  },
  secondChance(ticketID, secondChanceWinningIDs) {
    if (
      typeof ticketID !== "number" ||
      !Array.isArray(secondChanceWinningIDs)
    ) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};

module.exports = lottery;


const chai = require('chai');
const assert = chai.assert;
const lottery = require('./EXAM/Lottery');

describe('Lottery', function() {
  describe('buyLotteryTicket', function() {
    it('should return the correct message when valid input is provided', function() {
      const result = lottery.buyLotteryTicket(10, 5, true);
      assert.strictEqual(result, 'You bought 5 tickets for 50$.');
    });

    it('should throw an error when buy is false', function() {
      assert.throws(() => lottery.buyLotteryTicket(10, 5, false), 'Unable to buy lottery ticket!');
    });

    it('should throw an error when ticketPrice is zero', function() {
      assert.throws(() => lottery.buyLotteryTicket(0, 5, true), 'Invalid input!');
    });

    it('should throw an error when ticketCount is negative', function() {
      assert.throws(() => lottery.buyLotteryTicket(10, -5, true), 'Invalid input!');
    });

    it('should throw an error when ticketPrice is not a number', function() {
      assert.throws(() => lottery.buyLotteryTicket('10', 5, true), 'Invalid input!');
    });

    it('should throw an error when ticketCount is not a number', function() {
      assert.throws(() => lottery.buyLotteryTicket(10, '5', true), 'Invalid input!');
    });
  });

  describe('checkTicket', function() {
    it('should return the correct message when there are 3 to 5 winning numbers', function() {
      const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9]);
      assert.strictEqual(result, 'Congratulations you win, check your reward!');
    });

    it('should return the correct message when all 6 numbers are winning numbers', function() {
      const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
      assert.strictEqual(result, 'You win the JACKPOT!!!');
    });

    it('should throw an error when ticketNumbers is not an array', function() {
      assert.throws(() => lottery.checkTicket('1, 2, 3, 4, 5, 6', [1, 2, 3, 4, 5, 6]), 'Invalid input!');
    });

    it('should throw an error when luckyNumbers is not an array', function() {
      assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '1, 2, 3, 4, 5, 6'), 'Invalid input!');
    });

    it('should throw an error when ticketNumbers length is not 6', function() {
      assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]), 'Invalid input!');
    });

    it('should throw an error when luckyNumbers length is not 6', function() {
      assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]), 'Invalid input!');
    });
  });

  describe('secondChance', function() {
    it('should return the correct message when the ticketID is a winning ID', function() {
      const result = lottery.secondChance(123, [456, 123, 789]);
      assert.strictEqual(result, 'You win our second chance prize!');
    });

    it('should return the correct message when the ticketID is not a winning ID', function() {
      const result = lottery.secondChance(123, [456, 789]);
      assert.strictEqual(result, 'Sorry, your ticket didn\'t win!');
    });

    it('should throw an error when ticketID is not a number', function() {
      assert.throws(() => lottery.secondChance('123', [456, 789]), 'Invalid input!');
    });

    it('should throw an error when secondChanceWinningIDs is not an array', function() {
      assert.throws(() => lottery.secondChance(123, '456, 789'), 'Invalid input!');
    });
  });
});
