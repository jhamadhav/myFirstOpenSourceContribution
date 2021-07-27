window.onload = () => {

    let tableContent = ``;
    for (let i = 0; i < contributors.length; i++) {
        let row = `
        <tr>
            <td>
                <img src="./images/prLogo.svg" alt="PR logo">
            </td>
            <td>
                <a href=${contributors[i].github} class="name" target="_blank"> ${contributors[i].name} </a>
            </td>
            <td class="rank">${i + 1}</td>
        </tr>`;
        tableContent += row;
    }
    document.getElementsByTagName("table")[0].innerHTML = tableContent
}