import { RECEIVE_BOOKINGS, RECEIVE_BOOKING } from '../actions/booking_actions'

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return Object.assign({}, action.bookings);
    case RECEIVE_BOOKING:
      return Object.assign({}, state, { [action.booking.id]: action.booking });
    default:
      return state;
  }
};

export default bookingReducer;