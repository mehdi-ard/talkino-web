import * as CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes';
import encBase64 from 'crypto-js/enc-base64';
import encUtf8 from 'crypto-js/enc-utf8';

export class Crypto {
    private readonly key = import.meta.env.VITE_APP_KEY;  // 16 chars

    encrypt(plainText: string): string {
        if (typeof plainText !== 'string') {
            throw new Error('plainText must be a string');
        }

        const keyParsed = encUtf8.parse(this.key);
        const iv = encBase64.parse(this.key);

        return AES.encrypt(plainText, keyParsed, { iv }).toString();
    }


    decrypt(encryptedHex: string): string {
        const keyParsed = encUtf8.parse(this.key);
        const iv = encBase64.parse(this.key);
        //@ts-ignore
        const decrypted: CryptoJS.lib.WordArray = AES.decrypt({ ciphertext: encBase64.parse(encryptedHex) }, keyParsed, {
            iv,
        });

        return encUtf8.stringify(decrypted);
    }
}