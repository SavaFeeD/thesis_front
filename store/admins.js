export const state = () => ({
  list: [
    {
      id: 265186232323,
      number: 1,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 2,
    },
    {
      id: 265186232324,
      number: 2,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 0,
    },
    {
      id: 265186232325,
      number: 3,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 2,
    },
    {
      id: 265186232326,
      number: 4,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 0,
    },
    {
      id: 265186232327,
      number: 5,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: -1,
    }, {
      id: 265186232328,
      number: 6,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 2,
    },
    {
      id: 265186232329,
      number: 7,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 0,
    },
    {
      id: 265186232330,
      number: 8,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: -1,
    },
    {
      id: 265186232331,
      number: 9,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 2,
    },
    {
      id: 265186232332,
      number: 10,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 0,
    },
    {
      id: 265186232333,
      number: 11,
      email: 'samplemail@mail.com',
      name: 'Admin',
      permission: 'Admin',
      status: 0,
    },
  ],
});

export const getters = {
  getAdminsList: (s) => s.list,
  getAdminsListLength: (s) => s.list.length,
};

export const mutations = {
  changeSingleAdminStatus(s, payload) {
    const index = s.list.findIndex((it) => it.id === payload.id);
    s.list[index] = { ...s.list[index], ...payload };
  },
};

export const actions = {
  addAdmin({ commit, store }, payload) {
    // something
  },
  changeAdminStatus({ commit }, payload) {
    commit('changeSingleAdminStatus', payload);
  },
};
