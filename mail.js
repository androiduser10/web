function checkUser(){
    var username = $("username").value;
    var password = $("password").value;
    new Ajax.Request("signin.php",
        {
            method: "GET",
            parameters: 'username='+username+'&password='+password,
            onSuccess: function handler(ajax){
                document.open();
                document.write(ajax.responseText);
                document.close();

            }
        }
    );
}
function loadinfo(){
    new Ajax.Request("sendhomepage.php",
        {
            method: "GET",
            onSuccess: function handler(ajax){
                document.body.innerHTML=ajax.responseText;
            }
        }
    );
    
}
function NewMsg(){
    new Ajax.Request("sendMsg.php",
        {
            method: "GET",
            onSuccess: function handler(ajax){
                document.open();
                document.write(ajax.responseText);
                document.close();
            }
        }
    );
}
function sendMsg(){
    var subject = $("subject").value;
    var recipients = $("recipients").value;
    var body = $("body").value;
    new Ajax.Request("sendMsg.php",
        {
            method: "GET",
            parameters: 'subject='+subject+'&recipients='+recipients+'&body='+body,
            onSuccess: function handler(ajax){
                document.open();
                document.write(ajax.responseText);
                document.close();
            }
        }
    );
}
function signout(){
    new Ajax.Request("signout.php",
        {
            method: "GET",
            onSuccess: function handler(ajax){
                document.open();
                document.write(ajax.responseText);
                document.close();
            }
        }
    );
}
function goHome(){
    new Ajax.Request("sendhomepage.php",
        {
            method: "GET",
            onSuccess: function handler(ajax){
                document.open();
                document.write(ajax.responseText);
                document.close();
            }
        }
    );
}
function receiver(){
    new Ajax.Request("receiver.php",
        {
            method: "GET",
            onSuccess: function handler(ajax){
                $("receiver").innerHTML = ajax.responseText;
            }
        }
    );
}