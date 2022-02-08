function onSubmit() {
  let formData = new FormData();

  formData.append("photo", document.forms["userForm"]["photo"].files[0]);
  formData.append(
    "brand",
    new Blob(
      [
        JSON.stringify({
          name: document.getElementById("name").value,
        }),
      ],
      {
        type: "application/json",
      }
    )
  );

  let boundary = Math.random().toString().substr(2);
  console.log("formData---", formData);
  fetch(`https://61fb5b1587801d0017a2c494.mockapi.io/UPLOAD`, {
      method: "POST",
      body: formData
  })
    .then(function (res) {
      console.log(res);
      if (res.status !== 200) {
        console.log(res);
        alert("There was an error!");
      } else {
        alert("Request successful");
      }
    })
    .catch(function (err) {
      alert("There was an error");
    });
}