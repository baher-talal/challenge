import EventService from "@/services/EventService.js";

export const namespaced = true;

export const state = {
  events: [],
  eventsTotal: 0,
  event: [],
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },

  SET_EVENTS(state, events) {
    events.forEach(function (entry) {
      state.events.push(entry);
    });
  },

  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal;
  },

  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);

        const notification = {
          type: "succes",
          message: "Your Event Has Been Created!",
        };

        dispatch("notification/add", notification, { root: true });
      })

      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem creating your event: " + error.message,
        };

        dispatch("notification/add", notification, { root: true });

        throw error;
      });
  },

  fetchEvents({ commit, dispatch }, { limit, offset }) {
    EventService.getEvents(limit, offset)
      .then((response) => {
        commit("SET_EVENTS_TOTAL", parseInt(response.headers["x-total-count"]));
        commit("SET_EVENTS", response.data.data);
      })

      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem fetching events: " + error.message,
        };

        dispatch("notification/add", notification, { root: true });
      });
  },

  fetchEvent({ commit, getters, dispatch }, id) {
    var event = getters.getEventById(id);

    if (event) {
      commit("SET_EVENT", event);
    } else {
      EventService.getEvent(id)
        .then((response) => {
          commit("SET_EVENT", response.data);
        })

        .catch((error) => {
          const notification = {
            type: "error",
            message: "There was a problem fetching events: " + error.message,
          };

          dispatch("notification/add", notification, { root: true });
        });
    }
  },
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((events) => events.id === id);
  },
};
