export type SearchQueryStateData = {
  query: string;
};

const state: SearchQueryStateData = {
  query: ""
};

export default {
  namespaced: true,
  state,
  getters: {
    get(state: SearchQueryStateData): string {
      return state.query;
    }
  },
  mutations: {
    set(state: SearchQueryStateData, query: string) {
      state.query = query;
    }
  },
  actions: {
    update(context: any, query: string): void {
      context.commit("set", query);
    }
  }
};
