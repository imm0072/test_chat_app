import { Provider } from "react-redux";
import store from "./store";
const AppProvider=(props:any)=>{
return <Provider store={store}>
    {props.children}
</Provider>
}
export default AppProvider;