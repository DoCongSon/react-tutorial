import { StoreProvider } from './store'
import Todo from './Todo'

export default function TodoApp() {
    return (
        <StoreProvider>
            <Todo/>
        </StoreProvider>
    )
}
