import HomeScreen from "./screens/HomeScreen";
// Rest of the import statements
import { useFonts } from 'expo-font';

export default function App() {

    let [fontsLoaded] = useFonts({
        'primary': require('./assets/fonts/Roxborough-CF.ttf'),
    });

    return (<HomeScreen />);
}




