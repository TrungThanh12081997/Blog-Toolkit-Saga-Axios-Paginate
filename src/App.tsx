import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { DEFAULT_QUERY_OPTION } from "utils/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoutesLayout from "routes";
import { Provider } from "react-redux";
import { persistor, store } from "store";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: DEFAULT_QUERY_OPTION,
    },
});
const App = () => <RoutesLayout />;

const AppWrapper: React.FC = () => (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}><App /> </PersistGate>
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
export default AppWrapper;
