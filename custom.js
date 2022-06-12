            
            const table= document.getElementById("liste");
            function projeekle(){
                let data={
                   isim:document.getElementById("isim").value || "Değer Yok",
                   dil:document.getElementById("dil").value || "Değer Yok",
                   tarih:document.getElementById("tarih").value || "Değer Yok",
                   
                };
                fetch("https://reqres.in/api/users",{
                   method:"POST",
                   headers:{
                    'Content-Type': 'application/json'
                   },
                   body:JSON.stringify(data) 
                })
                .then(response=>response.json())
                .then(data=>{
                    console.log(data);
                    table.innerHTML+=`
                    <tr> 
                        <td>
                            ${data.isim}
                        </td>
                            <td>
                                ${data.dil}
                        </td>
                        <td>
                            ${data.tarih}
                        </td>
                        </tr>
                        `
                })
            }