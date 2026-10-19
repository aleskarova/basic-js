const { NotImplementedError } = require("../lib");

const CHAR_CODE_A = 65;
const ALPHABET_SIZE = 26;

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isNotRevered = true) {
    this.isRevered = !isNotRevered;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedChars = [];
    let i = 0;
    for (const ch of message) {
      if (ch < "A" || ch > "Z") {
        encryptedChars.push(ch);
        continue;
      }
      const kIndex = i % key.length;
      const mCharCode = ch.charCodeAt(0);
      const kCharCode = key.charCodeAt(kIndex);
      const encryptedCharCode =
        ((mCharCode - CHAR_CODE_A + kCharCode - CHAR_CODE_A) % ALPHABET_SIZE) +
        CHAR_CODE_A;
      encryptedChars.push(String.fromCharCode(encryptedCharCode));
      i += 1;
    }

    if (this.isRevered) {
      encryptedChars = encryptedChars.reverse();
    }

    return encryptedChars.join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptedChars = [];
    let i = 0;
    for (const ch of message) {
      if (ch < "A" || ch > "Z") {
        decryptedChars.push(ch);
        continue;
      }
      const kIndex = i % key.length;
      const cCharCode = ch.charCodeAt(0);
      const kCharCode = key.charCodeAt(kIndex);
      const decrytpedCharCode =
        ((cCharCode - kCharCode + ALPHABET_SIZE) % ALPHABET_SIZE) + CHAR_CODE_A;
      decryptedChars.push(String.fromCharCode(decrytpedCharCode));
      i += 1;
    }

    if (this.isRevered) {
      decryptedChars = decryptedChars.reverse();
    }

    return decryptedChars.join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
