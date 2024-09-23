import { create } from 'zustand'

export const useStore = create((set) => ({
  accessToken: '',
  refreshToken: '',
  saveTokens: (data) => set({ accessToken: data.login.access_token, refreshToken: data.login.refresh_token }),
  removeTokens: () => set({ accessToken: '',  refreshToken: ''}),
}))
