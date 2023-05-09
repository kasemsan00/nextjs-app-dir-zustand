export const createUserAgentStore = (set, get) => ({
  userAgent: [],
  setUserAgent: (data) => {
    set({ userAgent: data });
    return data;
  },
  getUserAgent: () => {
    const { userAgent } = get();
    return userAgent;
  },
});
