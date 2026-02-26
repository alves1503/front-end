
const Events = () => {
    const handleClick = () => {
        console.log("Executou");
    };


    // 08- Função de renderização
    const reder = (x) => {
        if (x) {
            return <h2>Evendo renderizado</h2>
        } else {
            return <p>Não foi possivel encontrar nenhum dado</p>
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>
                    Click aqui
                </button>
            </div>
            {/* 07- EVENTO DA FUNÇÃO */}
            <div>
                <button onClick={handleClick}>Click na função</button>
            </div>

            {/* 08- EVENTO REDENRIZADO */}
            <div>
                {reder(true)}
                {reder(false)}
            </div>
        </div>
    )
}

export default Events