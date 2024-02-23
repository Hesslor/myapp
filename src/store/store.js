import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: "myapp",
    storage: AsyncStorage,
}

const persistReducer = persistReducer(persistConfig,myappReducer);

const store = configureStore({
    reducer: persistConfig
})