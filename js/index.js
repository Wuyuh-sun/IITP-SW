
// onload event
$(function () {
  $('#form-login').on('submit', function () {
    var formData = $(this).serializeArray();
    var sendData = {};
    $.each(formData, function (idx, obj) {
      sendData[obj.name] = obj.value;
    })
    console.log(sendData);
    $.httpSend({
      url: '/user/login',
      data: sendData,
    })
    return false;
  })
})