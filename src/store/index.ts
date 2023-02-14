import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import exampleReducer from "./example";
import rootSaga from "./rootSaga";
import testReducer from "./test";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["comments", "posts"],
};
const persistedReducer = persistReducer(persistConfig, testReducer);

export const store = configureStore({
    devTools: process.env.NODE_ENV === "development",
    reducer: {
        example: exampleReducer,
        test: testReducer,
        persist: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaMiddleware),
});
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
