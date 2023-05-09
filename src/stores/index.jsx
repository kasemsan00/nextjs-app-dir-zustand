import { create } from "zustand";

import { createProductsStore } from "./products-store";
import { createBasketStore } from "./basket-store";
import { createUserAgentStore } from "@/stores/useragent-store";

export const useStore = create((...args) => ({
  ...createProductsStore(...args),
  ...createBasketStore(...args),
  ...createUserAgentStore(...args),
  hydrateStore: (data) => {
    const [set] = args;
    set({ ...data });
  },
}));
