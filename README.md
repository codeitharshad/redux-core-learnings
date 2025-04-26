# redux-core-learnings

# 📘 Redux Core Concepts — Complete Refresh

---

# 🚀 1. Redux Store Basics

- **Store** holds the **application state**.
- Create a store using:

```javascript
const store = createStore(reducer);
```

---

# 🏁 2. Initial State

- Define the initial/default state:

```javascript
const initialState = {
  numOfCake: 10,
};
```

---

# ⚡ 3. Actions and Action Creators

- **Action** = Plain object with a mandatory `type` field.
- **Action Creator** = Function that returns an action.

Example:

```javascript
const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
```

> 💡 **Default Argument Tip:**

```javascript
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
}
```

---

# 🛠️ 4. Reducer

- Pure function: `(previousState, action) => newState`
- Must return a **new object** every time.

Example:

```javascript
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCake: state.numOfCake - 1,
      };

    default:
      return state;
  }
};
```

---

# 📤 5. Dispatching Actions

- Send an action to the store:

```javascript
store.dispatch(orderCake());
```

---

# 📢 6. Subscribing to Store Changes

- Listen for updates to the state:

```javascript
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
```

- Redux **automatically** triggers this function after every dispatch.

---

# ❌ 7. Unsubscribing

- Stop listening to updates:

```javascript
unsubscribe();
```

React Auto-unsubscribe example:

```javascript
useEffect(() => {
  const unsubscribe = store.subscribe(() => console.log(store.getState()));
  return () => unsubscribe();
}, []);
```

---

# 🔄 8. Redux Full Flow Summary

```
Initial State
    ↓
Dispatch(Action)
    ↓
Reducer
    ↓
New State
    ↓
Subscribed Listener Runs
    ↓
UI Updates
```

---

# 🎯 Final Notes

- 🏆 Single Source of Truth.
- 🛡️ Immutable State Updates.
- 🎯 Predictable State Behavior.

---


