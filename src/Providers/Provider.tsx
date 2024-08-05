"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { persistStore } from "redux-persist";

const Providers = ({ children }: { children: any }) => {
  const persistor = persistStore(store);

  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
