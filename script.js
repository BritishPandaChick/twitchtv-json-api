//Run our jQuery
var following=[];

$(document).ready(function(){
  //FreeCodeCamp stream info and status API call
  var url = "https://api.twitch.tw/kraken/streams/freecodecamp";
  $.getJSON(url, function(data1){
    if(data1.stream === null){
      $("#fccStatus").html("FreeCodeCamp is currently offline!");
    } else {
      $("#fccStatus").html("FreeCodeCamp is currently online.");
    }
  });

  var followerURL = "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels";

  $.getJSON(followerURL, function(data2){
    for (var i=0; i<data2.follows.length; i++){
      var displayName = data2.follows[i].channel.display_name;
      following.push(displayName);
    }

    following.push('comster404');
    following.push('brunofin');
    following.push('ESL_SC2');
    following.push('ESL_SC2');
    following.push('OgamingSC2');
    following.push('cretetion');
    following.push('freecodecamp');
    following.push('storbeck');
    following.push('habathcx');
    following.push('RobotCaleb');
    following.push('noobs2ninjas');
    
    for (var i=0; i<following.length; i++){
      var url2 = 'https://api.twitch.tv/kraken/streams' + following[i] + '/?callback=?';

      $.getJSON(url2).done(function(data3){
        var logo;
        var status;
        var name;

        if (data3.error){
          logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuu03BNOBVpXsVp2VQIpBSTPdLKWGuB3AI-jm5x9G74bX1g";
          name = data3.message;
          status = data3.error;

          $("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
        }
        if (data3.stream===null {
          $.getJSON(data3._links.channel, function(data5){
            status = "OFFLINE";
            logo = data5.logo;
            name = data3.display_name;
            if(logo===null){
              logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
            }
            $("#followerInfo").prepend("<div class= 'row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
          });
        }
      });
    }

    for(var i=0; i<following.length; i++){
      var onlineURL = "https://api.twitch.tv/kraken/streams" + following[i];
      $.getJSON(url, function(data4){
        var logo = data4.stream.channel.logo;
        if(logo===null) {
          logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
        }

        var name = data5.stream.channel.display_name;
        var status = data4.stream.channel.status;
        $("#followerInfo").prepend("<div class='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      });
    });
  }
});
