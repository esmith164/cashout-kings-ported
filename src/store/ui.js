import { defineStore } from 'pinia'
export const uiStore = defineStore('uiStore', {
  state: () => {
    return {
      title: '',
      activeModal: null,
      sidebarOpen: true
    }
  } ,
  actions: {
    toggleModal(modal) {
      this.activeModal = modal
    },
    setPageTitle(title)  {
      this.title = title
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  } 
});