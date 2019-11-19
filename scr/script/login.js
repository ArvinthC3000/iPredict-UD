$('#login').click(()=>{
    let passcode = '0000'
    let checkPasscode = $('#passcode').val();
    console.log(typeof checkPasscode,typeof passcode)
    if(checkPasscode===passcode){
        window.location.href = '../pages/dataCenter.html'
    }
})