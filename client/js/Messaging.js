$(document).ready(function() {
    
    //submit button functionality
    $("#btn-chat").on("click", function(){
        //alert("Button submit");
        //grab message
        var msg = $("#btn-input").val();
        //console.log("msg = " + msg);
        
        // ajax call later
        // other = left side
        // <li class="left clearfix" id="message0"><span class="chat-img pull-left">
        //     <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />
        // </span>
        //     <div class="chat-body clearfix">
        //         <div class="header">
        //             <strong class="primary-font" ng-bind="msg.name"></strong> <small class="pull-right text-muted">
        //                 <span class="glyphicon glyphicon-time"></span>X (get time from db) mins ago</small>
        //         </div>
        //         <p id="msgtext"></p>
        //     </div>
        // </li>
        // // user = right side
        // <li class="right clearfix"><span class="chat-img pull-right">
        //     <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
        // </span>
        //     <div class="chat-body clearfix">
        //         <div class="header">
        //             <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small>
        //             <strong class="pull-right primary-font"></strong>
        //         </div>
        //         <p ng-bind="msg.text"></p>
        //     </div>
        // </li>
        
    });
});