const initialState = [
  {
    id: 0,
    name: "sannasi",
    number: 7272076762,
    email: "sannasi@gmail.com",
  },
  {
    id: 1,
    name: "chottu",
    number: 8468890064,
    email: "chottu@gmail.com",
  },
  {
    id: 2,
    name: "Dhojay",
    number: 7272075762,
    email: "dhojay@gmail.com",
  },
  {
    id: 3,
    name: "Vijay",
    number: 9876543210,
    email: "vj@gmail.com",
  },
  {
    id: 4,
    name: "Tamil",
    number: 7272567624,
    email: "tamil@gmail.com",
  },
  {
    id: 5,
    name: "Laxmi",
    number: 8468893629,
    email: "laxmi@gmail.com",
  },
  {
    id: 6,
    name: "Mari",
    number: 9868890064,
    email: "mari@gmail.com",
  },
  {
    id: 7,
    name: "Muthu",
    number: 8975075762,
    email: "muthu@gmail.com",
  },
  {
    id: 8,
    name: "Diamond",
    number: 9677793210,
    email: "diamond@gmail.com",
  },
  {
    id: 9,
    name: "Timx",
    number: 8972567762,
    email: "timix@gmail.com",
  },
  {
    id: 10,
    name: "Yaro",
    number: 9878893629,
    email: "yaro@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
