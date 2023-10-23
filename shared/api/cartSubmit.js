const item = {
    name: "book",
    id: 37
};

const data = JSON.stringify(item);
const xhr = new XMLHttpRequest();
 
xhr.open("POST", "/cartSubmit");
xhr.setRequestHeader("Content-Type", "application/json");
 
xhr.send(data);