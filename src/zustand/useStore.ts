import { DataType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  accessToken: string;
  refreshToken: string;
  saveTokens: (data: DataType) => void;
  removeTokens: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      accessToken: "",
      refreshToken: "",
      saveTokens: (data) =>
        set({
          accessToken: data.login.access_token,
          refreshToken: data.login.refresh_token,
        }),
      removeTokens: () => set({ accessToken: "", refreshToken: "" }),
    }),
    { name: "tokenStorage" },
  ),
);
