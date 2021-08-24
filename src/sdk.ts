type SDK_TYPE = typeof import('@internet-of-people/sdk');

export let sdk: SDK_TYPE = {} as SDK_TYPE;

export const load = async (): Promise<boolean> => {
  try {
    sdk = await import('@internet-of-people/sdk');
  } catch (e) {
    return false;
  }
  return true;
};
