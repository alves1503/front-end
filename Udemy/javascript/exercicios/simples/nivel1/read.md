# NÍVEL 1 – Variáveis, Tipos e Operadores

# NÍVEL 1 – Variáveis, Tipos e Operadores

## 📘 Teoria

### 1️⃣ Variáveis

Em JavaScript usamos:

```jsx
let
	const 
var (não usamos mais em projetos modernos)
```

### ✅ `let`

- Pode mudar o valor depois
- Escopo de bloco

```jsx
let idade =19;
idade =20;
```

### ✅ `const`

- Não pode ser reatribuída
- Também tem escopo de bloco

```jsx
const nome ="Henrique";
```

---

## 📘 Tipos Primitivos

```jsx
string
number
boolean
null
undefined
```

Exemplos:

```jsx
let nome ="Henrique";// string
let idade =19; // number
let ativo =true; // boolean
```

---

## 📘 Operadores

### Matemáticos

```
+  -  *  /  %
```

### Comparação

```
==  (evitar)=== (usar sempre)!=!==
>
<
>=
<=
```

👉 Sempre use `===` (comparação estrita)

---

## 📘 Estrutura Condicional

```jsx
if (condicao) {// código
}else {// código
}
```

Exemplo:

```jsx
let idade =18;
if (idade >=18) {
console.log("Maior de idade");
} else {
console.log("Menor de idade");
}
```

---

# 🧠 Exercício 1 – Sistema de Verificação

Crie um script que:

1. Declare:
    - nome
    - idade
    - salario
2. Faça as seguintes verificações:
    
    ✅ Se idade >= 18 → mostrar: "Pode ser contratado"
    
    ❌ Caso contrário → "Não pode ser contratado"
    
    ✅ Se salário > 2000 → mostrar: "Salário acima da média"
    
    ❌ Caso contrário → "Salário dentro da média"
    
3. Mostrar tudo no console.

---

⚠️ Regras:

- Use `let` ou `const` corretamente
- Use `===` se precisar comparar igualdade
- Organize o código
- Nada de gambiarra 😅