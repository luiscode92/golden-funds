

  try {
    const response = await fetch('http://localhost:8080/', {mode:'cors'});
    const data = await response.json();
    console.log({ data })
  }
  catch (e) {
    console.log(e)
  }


