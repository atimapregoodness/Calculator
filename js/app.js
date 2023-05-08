
const form1 = document.querySelector('#form-one')
const firstAdd = document.querySelector('#first-add')
const secondAdd = document.querySelector('#second-add')
const addResult = document.querySelector('#add-result')
const btnSubmit1 = document.querySelector('#submit')

const info = document.querySelector('#info')


form1.addEventListener('submit', (m) => {
      m.preventDefault()
      const valueOne = Number(firstAdd.value) ;
      const valueTwo = Number(secondAdd.value);

      btnSubmit1.onclick = () =>{
            addResult.innerText = `${valueOne +  valueTwo}`;
      }
})

const form2 = document.querySelector('#form-two')
const firstMulti = document.querySelector('#first-multiply')
const secondMulti = document.querySelector('#second-multiply')
const multiResult = document.querySelector('#multiply-result')
const btnSubmit2 = document.querySelector('#submit2')


form2.addEventListener('submit', (m) => {
      m.preventDefault()
      const valueOne = Number(firstMulti.value) ;
      const valueTwo = Number(secondMulti.value);

      btnSubmit2.onclick = () =>{
            multiResult.innerText = `${valueOne *  valueTwo}`;
      }
})

const form3 = document.querySelector('#form-three')
const firstDivide = document.querySelector('#first-divide')
const secondDivide = document.querySelector('#second-divide')
const divideResult = document.querySelector('#divide-result')
const btnSubmit3 = document.querySelector('#submit3')


form3.addEventListener('submit', (m) => {
      m.preventDefault()
      const valueOne = Number(firstDivide.value) ;
      const valueTwo = Number(secondDivide.value);

      btnSubmit3.onclick = () =>{
            divideResult.innerText = `${valueOne /  valueTwo}`;
      }
})






