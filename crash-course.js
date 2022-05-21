// 01 VALUE TYPE

//PRIMITIVE TYPE
    const name = 'Supapen' // cannot change value
    let height = 150 // can change value
    let isFemale = true // boolean
    let city // undefined
    let country = null // no value
    let bigNumber = 10n // Big int (suitable for big data)

    // console.log(name)
    console.log('real height: ' + height)

    height = 170
    console.log('ideal height: ' + height)

    console.log(city)
    console.log(country)

    console.log(bigNumber)

//REFERENCE TYPE
    const person = { // Create obj
        name: 'Supapen',
        height: 150,
        city: 'BKK'
    } 

    console.log(person)
    console.log('Name: ' + person.name)

    person.height = 170
    console.log('New height: ' + person.height)

    person.weight = 38 // add to obj
    console.log(person)

    const numbers = [5,10,15,20]
    console.log(numbers)
    console.log(numbers[2]) // print 15 (index 2)

    numbers.push(25) // add value to the last index
    console.log(numbers)

    numbers.pop() // delete the last index value
    console.log(numbers)

    numbers.unshift(0) // add value to the first index
    console.log(numbers)

    numbers.shift() // delete the first index value
    console.log(numbers)

// 02 ARITHMETIC OPERATORS
    let result = 10 + 5 * 2 - 1
    console.log(result)

// 03 CONDITIONS
    // if-else
    const age = 25
    if (age > 18) {
        console.log('Age is more than 18')
    } else {
        console.log('Age is less than or equal to 18')
    }

    let password = ''
    if (password === '') {
        console.log('Password is required')
    } else if (password.length >= 8 && password.length <= 12) { 
        console.log('Password is valid')
    } else {
        console.log('Password is invalid')
    }

    // switch 
    // ternary

// 04 FUNCTIONS
    function calculateVat(money, vat) {
        return money * vat / 100
    }
    const totalVat = calculateVat(100, 7)
    console.log(totalVat)

    const totalVat10 = calculateVat(100, 10)
    console.log(totalVat10)

// 05 FLOW CONTROL (LOOP)
    for (let counter = 0; counter < 10; counter++) {
        if (counter % 2 !== 0) {
            continue
        }
        console.log(counter)

        if (counter === 5) {
            break
        }
        console.log(counter)
    }

// 06 DOM MANIPULATION
    document.querySelector('input') // ดึง element input มาเพื่อใช้ทำงาน อ่านค่า
    document.getElementById('email') // ดึง elemet ด้วย id
    document.createElement('div') // สร้าง element
    document.appendChild(element) // เอา elemet นึงไปเป็นลูกของอีก element

// 07 EVENT
    const btnElem = document.querySelector('button') // ดึง element button
    btnElem.addEventListener('click', onClick) // bind event 
    
    function onClick(event) {
        console.log(event.target) // element ที่ทำให้เกิด event
    }