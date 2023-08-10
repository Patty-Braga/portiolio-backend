const somar = (req, res) => {
    const { num1, num2 } = req.query;
    let numero1 = Number(num1)
    let numero2 = Number(num2)

    let resultado = numero1 + numero2;

    res.send(`${resultado}`);
}

const subtrair = (req, res) => {
    const { num1, num2 } = req.query;
    let numero1 = Number(num1)
    let numero2 = Number(num2)

    let resultado = numero1 - numero2;

    res.send(`${resultado}`);
}

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query;
    let numero1 = Number(num1)
    let numero2 = Number(num2)

    let resultado = numero1 * numero2;

    res.send(`${resultado}`);
}

const dividir = (req, res) => {
    const { num1, num2 } = req.query;
    let numero1 = Number(num1)
    let numero2 = Number(num2)

    let resultado = numero1 / numero2;

    res.send(`${resultado}`);
}

module.exports = { somar, subtrair, multiplicar, dividir }