import { createSelector } from "reselect";

const usersSelector = (state) =>  state.users;


export const getSignedIn = createSelector(
    [usersSelector],
    state => state.isSignedIn
);
export const getUserId = createSelector(
    [usersSelector],
    state => state.uid
)
export const getUsername = createSelector(
    [usersSelector],
    state => state.username
)

export const getProductsInCart = createSelector(
    [usersSelector],
    state => state.cart
);

export const getUserRole = createSelector(
    [usersSelector],
    state => state.role
);

export const getOrdersHistory = createSelector(
    [usersSelector],
    state => state.orders
);

export const getPaymentMethodId = createSelector(
    [usersSelector],
    state => state.payment_method_id
)

export const getCustomerId = createSelector(
    [usersSelector],
    state => state.customer_id
);