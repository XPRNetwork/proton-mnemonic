import { HDKey } from "@scure/bip32";
import { mnemonicToSeedSync, entropyToMnemonic } from '@scure/bip39';
import crypto from '@jafri/isomorphic-webcrypto';
import { wordlist } from './wordlist';

export const generateMnemonic = (strength: number) => {
  strength = strength || 128;
  const r = strength % 32;
  if (r > 0) {
    throw new Error(
      'Strength should be divisible by 32, but it is not (' + r + ').'
    );
  }
  const buffer = new Uint8Array(strength / 8);
  const data = crypto.getRandomValues(buffer);
  return entropyToMnemonic(data, wordlist);
};

export const calcBip32ExtendedKey = ({
  mnemonic,
  passphrase,
  derivationPath,
}: {
  mnemonic: string;
  passphrase?: string;
  derivationPath: string;
}) => {
  const masterSeed = mnemonicToSeedSync(mnemonic, passphrase);
  const extendedKey: HDKey = HDKey.fromMasterSeed(masterSeed);
  const derivedKey = extendedKey.derive(derivationPath)
  return derivedKey;
};
