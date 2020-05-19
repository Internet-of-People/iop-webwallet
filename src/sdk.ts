type SDK_TYPE = typeof import('@internet-of-people/sdk');

export let sdk: SDK_TYPE = {} as SDK_TYPE;

export const load = async (): Promise<void> => {
  sdk = await import('@internet-of-people/sdk');
};
