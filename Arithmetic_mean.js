const firstDate = prompt('Enter number 1')
const firstNumber = Number(firstDate)
const secondDate = Number(prompt('enter number 2'))
const secondNumber = Number(secondDate)
const thirdDate = Number(prompt ('Enter number 3'))
const thirdNumber  = Number(thirdDate)
if (firstDate === null || secondDate === null ||
    thirdDate === null) {
    confirm('Your cancel number, it will be equal to 0')
    {
        if (Number.isNaN(firstNumber)) {
            alert('Number 1 is not correct')
        } else if (Number.isNaN(secondNumber)) {
            alert('Number 2 is not correct')
        } else if (Number.isNaN(thirdNumber)) {
            alert('Number 3 is not correct')
        } else {
            const arithmeticMean = (firstNumber + secondNumber +
                thirdNumber) / 3
            alert(`Arithmetic mean: + ${arithmeticMean}`)
        }
    }
}
else {
    if (firstDate === '' || firstDate.includes(' ')) {
        confirm('Your enter blank, it will be equal to 0')
        {
            if (Number.isNaN(firstNumber)) {
                alert('Number 1 is not correct')
            } else if (Number.isNaN(secondNumber)) {
                alert('Number 2 is not correct')
            } else if (Number.isNaN(thirdNumber)) {
                alert('Number 3 is not correct')
            } else {
                const arithmeticMean = (firstNumber + secondNumber +
                    thirdNumber) / 3
                alert(`Arithmetic mean: + ${arithmeticMean}`)
            }
        }
    }
}
if (Number.isNaN(firstNumber)) {
    alert('Number 1 is not correct')
} else if (Number.isNaN(secondNumber)) {
    alert('Number 2 is not correct')
} else if (Number.isNaN(thirdNumber)) {
    alert('Number 3 is not correct')
} else {
    const arithmeticMean = (firstNumber + secondNumber +
        thirdNumber) / 3
    alert(`Arithmetic mean: + ${arithmeticMean}`)
}
