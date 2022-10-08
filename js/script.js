console.log(inf);
inf.forEach((a) => {
    const list = `
    <tr>
    <td>
    ${a.postId}
    </td>
    <td>
    ${a.id}
    </td>
    <td>
    ${a.name}
    </td>
    <td>
    ${a.email}
    </td>
    <td>
    ${a.body}
    </td>
    </tr>
    `
    document.getElementById("root").innerHTML += list
    console.log(a)
});