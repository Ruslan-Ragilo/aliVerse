export const useModalBasked = defineStore("baskedModal", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    getIsOpen: (state) => state.isOpen,
  },
  actions: {
    setIsOpen(value: boolean) {
      this.isOpen = value;
    },
  },
});
