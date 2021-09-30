let loadWork = async () => {
  console.log(`LOADWORK FIRED`)
  try {
    window.location.replace('/work')
  } catch (err) {
    console.log(err)
  }
}


document.querySelector(`#work`).addEventListener(`click`, loadWork)