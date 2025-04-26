const initialState = {
  name: "Harshad",
  address: {
    street: "Main Street",
    city: "Delhi",
    State: "India",
  },
};


const STREET_UPDATED = "STREET_UPDATED";

const updateSteet = (street) => {
    return{
        type: STREET_UPDATED,
        payload: street,
    }
}