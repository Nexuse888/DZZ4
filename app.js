// const person = {
//     name: 'Vadim',
//     age: '17'
// }
// console.log(person)
//
// const   json = JSON.stringify(person)
// const newObj = JSON.parse(json)
// console.log(newObj)
// xht
 const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
 const request = new XMLHttpRequest()
 request.open("GET", "data.json")
 request.setRequestHeader("Content-type", "application/json")
 request.send()
 request.addEventListener('load', () => {
  const data = JSON.parse(request.response)
  document.querySelector('.Name').innerHTML = data.name
  document.querySelector('.age').innerHTML = data.age
  console.log(data)


 })
})