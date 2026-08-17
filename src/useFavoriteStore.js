import { create } from 'zustand';

export const useFavoriteStore = create((set) => ({
  favorites: [],
  toggleFavorite: (card) => set((state) => {
    const exists = state.favorites.some((item) => item.id === card.id);
    if (exists) {
      return { favorites: state.favorites.filter((item) => item.id !== card.id) };
    } else {
      return { favorites: [...state.favorites, card] };
    }
  }),
}));