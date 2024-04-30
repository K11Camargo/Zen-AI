async function validarLogin(){

    const email=document.getElementById('email').value
    const senha=document.getElementById('senha').value

    if(email==''||senha==''){
        alert('Preencha todos os campos')
        return false
    }

    try{
        const users=await fetch('https://back-login.vercel.app/usuarios')

        const listUsers=await users.json()

        let validaUsuario=false

        listUsers.forEach((user)=>{
            if(email===user.email&&senha===user.senha){
                alert('Usuário encontrado com sucesso!')
                localStorage.setItem("id",user.id)
                localStorage.setItem("email",user.email)
                window.location.href = './home.html'
                validaUsuario=true
            }
        }) 


        if(!validaUsuario){
            alert('Usuário não encontrado.')
        }
        

    }catch(error){
        alert('Erro ao acessar a API')
        console.error(error)
    }
}