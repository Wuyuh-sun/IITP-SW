
$(function () {

  $('#btn-upload').on('click', function () {
    M.media.picker({
      mode: "SINGLE",
      media: "PHOTO",
      column: 3,
      callback: function( status, result ) {
        var fileList = [], fileCont = {};
        fileCont.name = 'uploadFile';
        fileCont.content = ( M.navigator.os('android') ) ? result.fullpath : result.path; ;
        fileCont.type = 'FILE';
        fileList.push(fileCont);
        M.net.http.upload({
          url: "http://192.168.193.198:8080/uploadFile",
          header: {},
          params: {},
          body: fileList,
          encoding : "UTF-8",
          finish : function(code, header, body, status, error) {
            if (status == 'SUCCESS') {
              var bodyData = JSON.parse(body);
                $('#img-preview').attr('src', 'http://192.168.193.198:8080' + bodyData.path);
                $('#img-preview').show();
            }
            else
            {
                M.pop.alert( status + " / " + error );
            }
         }
       });
      }
    });
  });
});