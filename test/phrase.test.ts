import { Mnemonic } from '../src';

const phrase = 'reflect note upgrade mention marine sword track pride robust vessel tube sausage kind trick neglect';

const index0 = 0;
const publicKeyMock0 = 'PUB_K1_71ESPbpkYsR9iQd1tgqxqZqUJFX8veJGUS5RnGGekq4Vb1ExPj';
const privateKeyMock0 = 'PVT_K1_du8FBHSYpapVw17ZmWBU3u3dBCARMFe54X49yfPrFCUoXpADk';
const publicKeyLegacyMock0 = 'EOS71ESPbpkYsR9iQd1tgqxqZqUJFX8veJGUS5RnGGekq4Vd64yg6';
const privateKeyLegacyMock0 = '5JTBhvdNX1Pa5WKH9mDQGWo2GE17NZDLMt8JHL2Qdj6qeTjzqE6';

const index1 = 1;
const publicKeyMock1 = 'PUB_K1_81XmEja12HvGAnwi8eDZKHWcq8Yorv2oy7x7jXw3BuwyKzSuBV';
const privateKeyMock1 = 'PVT_K1_WbQ12A4hzYGwXHvRv1YVc9AKf8yaG8yMuz4uH6iY5tXcJqSMN';
const publicKeyLegacyMock1 = 'EOS81XmEja12HvGAnwi8eDZKHWcq8Yorv2oy7x7jXw3BuwyRYDF7g';
const privateKeyLegacyMock1 = '5JKsygUF9AZXXwuZxdMudYMGNvV4Bi8DhAymJ5KqxQwXhGpqqJ5';

describe('Mnemonic', () => {
  it('Phrase works: Index 0', () => {
    const mnemonic = new Mnemonic({ phrase: phrase });
    const { publicKey, privateKey } = mnemonic.keyPairAtIndex(index0);
    expect(publicKey).toEqual(publicKeyMock0);
    expect(privateKey).toEqual(privateKeyMock0);

    const { publicKey: publicKeyLegacy, privateKey: privateKeyLegacy } = mnemonic.keyPairAtIndex(index0, true);
    expect(publicKeyLegacy).toEqual(publicKeyLegacyMock0);
    expect(privateKeyLegacy).toEqual(privateKeyLegacyMock0);
  });

  it('Phrase works: Index 1', () => {
    const mnemonic = new Mnemonic({ phrase: phrase });
    const { publicKey, privateKey } = mnemonic.keyPairAtIndex(index1);
    expect(publicKey).toEqual(publicKeyMock1);
    expect(privateKey).toEqual(privateKeyMock1);

    const { publicKey: publicKeyLegacy, privateKey: privateKeyLegacy } = mnemonic.keyPairAtIndex(index1, true);
    expect(publicKeyLegacy).toEqual(publicKeyLegacyMock1);
    expect(privateKeyLegacy).toEqual(privateKeyLegacyMock1);
  });

  it('Generates phrase', () => {
    const mnemonic = new Mnemonic({ numWords: 24 });
    expect(mnemonic.phrase.split(' ').length).toEqual(24);
  });
});
