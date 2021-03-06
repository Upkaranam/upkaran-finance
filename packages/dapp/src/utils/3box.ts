import { CONFIG } from 'config';

export type BoxProfile = {
  address: string;
  name: string;
  emoji: string;
  imageHash: string;
  imageUrl: string;
};

export const getProfile = async (account: string): Promise<BoxProfile> => {
  const address = account.toLowerCase();
  const profile: BoxProfile = {
    address,
    name: '',
    emoji: '',
    imageHash: '',
    imageUrl: `https://avatars.dicebear.com/api/jdenticon/${address}.svg`,
  };
  const response = await fetch(
    `${CONFIG.boxEndpoint}/profile?address=${encodeURIComponent(address)}`,
  );
  if (response.ok && response.status === 200) {
    const boxProfile = await response.json();
    const imageHash =
      boxProfile &&
      boxProfile.image &&
      boxProfile.image[0] &&
      boxProfile.image[0].contentUrl &&
      boxProfile.image[0].contentUrl['/'];
    if (imageHash) {
      profile.imageHash = imageHash;
      profile.imageUrl = `${CONFIG.ipfsEndpoint}/ipfs/${imageHash}`;
    }
    profile.name = boxProfile.name;
    profile.emoji = boxProfile.emoji;
  }
  return profile;
};
