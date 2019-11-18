let passwordStrength = false
$("#register").click(()=>{
    let data ={}
    data.username = $('#name').val()
    data.email = $('#email').val()
    data.password = $('#password').val()
    data.username === ''?$('#name').css('border','1px solid red'):null
    data.email === ''?$('#email').css('border','1px solid red'):null
    data.password === ''?$('#password').css('border','1px solid red'):null

    if(data.username !=='' && data.email !=='' ){
        window.location.href = '../pages/login.html'
    }
})