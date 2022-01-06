import Reactotron from 'reactotron-react-native';

// Variável Global
if (__DEV__) {
    const tron = Reactotron.configure({ host: '192.168.0.112' })
        .useReactNative()
        .connect();
    console.tron = tron;

    // Limpa a time line sempre que reinicio a plicação
    tron.clear();
}
