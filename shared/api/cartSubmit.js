const data = { id: 1, name: "book" };

fetch("/cartSubmit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})