// 04- Template Expresion

const TemplateExpression = () => {
  name = "Henrique";

  const data = {
    name: "Henrique",
    job: "Dev"
  };

  const a = 5;
  const b = 2;
  return (
    <div>
      <p>Bem-vindo <span>{name}</span></p>
      <p>A soma de {a} + {b} = {a + b}</p>
      <p>Olá {data.name} seu trabalho atual é de {data.job}</p>
    </div>
  )
}

export default TemplateExpression