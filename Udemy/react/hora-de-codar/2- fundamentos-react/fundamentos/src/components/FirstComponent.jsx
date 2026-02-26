// Hierarquia de componentes
import MyComponent from "./MyComponent";

const FirstComponent = () => {
// 1- Criando componentes
    return (
        <div>
            <h2>Meu primeiro componente</h2>
            <MyComponent />
        </div>
    );
};


export default FirstComponent;