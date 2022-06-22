import axios from 'axios';

const firstDiv = document.getElementById("myDiv")

async function getUser() {
    try {
        const { data } = await axios.get('https://62aa3cf53b31438554448672.mockapi.io/users');
        console.log(data);
        const users = data.map((user) => {
            return `
            <div>
                <div>
                    <img src="${user.avatar}" />
                </div>
                <div>
                    <p>${user.name}</p>
                </div>
            </div>
            `
        })
        firstDiv.innerHTML = users;
    } catch (error) {
        console.log(error)
    }
}

getUser();
