import axios from 'axios';

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    axios.post("http://localhost:5000/upload", formData, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
});