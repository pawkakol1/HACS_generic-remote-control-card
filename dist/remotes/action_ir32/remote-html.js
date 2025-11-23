function getRemoteStyle_action_ir32(config) {
   const template = config.remote_template;
   const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;
   
  return `
    ha-card{
    	background-color:transparent;
    	box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
	margin: 0;
	padding: 20px;
	font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
	width: 360px;
	margin: 0 auto
}

#remote-control-action_ir32 {
	position: relative;
	background: url(${base_url}/base.png) no-repeat;
	width: 322px;
	height: 694px;
	margin: auto;
}

#remote-control-action_ir32 h2,
#remote-control-action_ir32 span {
	position: absolute;
	left: 5000px
}

#remote-control-action_ir32 ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#button_on a,
#button_off a,
#button_timer a,
#button_red a,
#button_green a,
#button_blue a,
#button_orange a,
#button_lightgreen a,
#button_purple a,
#button_yellow a,
#button_lightblue a,
#button_pink a,
#button_plus a,
#button_minus a,
#button_white a,
#button_music_plus a,
#button_music_minus a,
#button_mode a,
#button_icset_plus a,
#button_icset a,
#button_icset_minus a {
	position: absolute;
	display: block
}


#remote-control-action_ir32 li#button_on a {
    left: 35px;
    top: 54px;
    width: 69px;
    height: 67px;	
	background: url(${base_url}/on.png) no-repeat
}


#remote-control-action_ir32 li#button_off a {
    left: 125px;
    top: 53px;
    width: 70px;
    height: 69px;	
	background: url(${base_url}/off.png) no-repeat
}

#remote-control-action_ir32 li#button_timer a {
    left: 216px;
    top: 52px;
    width: 71px;
    height: 70px;	
	background: url(${base_url}/timer.png) no-repeat
}

#remote-control-action_ir32 li#button_red a {
    left: 35px;
    top: 135px;
    width: 69px;
    height: 68px;	
	background: url(${base_url}/red.png) no-repeat
}

#remote-control-action_ir32 li#button_green a {
    left: 126px;
    top: 134px;
    width: 69px;
    height: 69px;	
	background: url(${base_url}/green.png) no-repeat
}

#remote-control-action_ir32 li#button_blue a {
    left: 217px;
    top: 134px;
    width: 69px;
    height: 68px;	
	background: url(${base_url}/blue.png) no-repeat
}

#remote-control-action_ir32 li#button_orange a {
    left: 35px;
    top: 215px;
    width: 70px;
    height: 70px;	
	background: url(${base_url}/orange.png) no-repeat
}

#remote-control-action_ir32 li#button_lightgreen a {
    left: 127px;
    top: 215px;
    width: 69px;
    height: 69px;	
	background: url(${base_url}/lightgreen.png) no-repeat
}

#remote-control-action_ir32 li#button_purple a {
    left: 217px;
    top: 215px;
    width: 70px;
    height: 68px;		
	background: url(${base_url}/purple.png) no-repeat
}

#remote-control-action_ir32 li#button_yellow a {
    left: 35px;
    top: 297px;
    width: 70px;
    height: 69px;	;	
	background: url(${base_url}/yellow.png) no-repeat
}

#remote-control-action_ir32 li#button_lightblue a {
    left: 126px;
    top: 296px;
    width: 70px;
    height: 70px;		
	background: url(${base_url}/lightblue.png) no-repeat
}

#remote-control-action_ir32 li#button_pink a {
    left: 218px;
    top: 296px;
    width: 70px;
    height: 69px;		
	background: url(${base_url}/pink.png) no-repeat
}

#remote-control-action_ir32 li#button_plus a {
    left: 34px;
    top: 378px;
    width: 72px;
    height: 72px;		
	background: url(${base_url}/plus.png) no-repeat
}

#remote-control-action_ir32 li#button_minus a {
    left: 126px;
    top: 377px;
    width: 72px;
    height: 72px;		
	background: url(${base_url}/minus.png) no-repeat
}

#remote-control-action_ir32 li#button_white a {
    left: 219px;
    top: 377px;
    width: 70px;
    height: 70px;		
	background: url(${base_url}/white.png) no-repeat
}

#remote-control-action_ir32 li#button_music_minus a {
    left: 33px;
    top: 460px;
    width: 73px;
    height: 73px;		
	background: url(${base_url}/musicminus.png) no-repeat
}

#remote-control-action_ir32 li#button_music_plus a {
    left: 124px;
    top: 456px;
    width: 77px;
    height: 79px;		
	background: url(${base_url}/musicplus.png) no-repeat
}

#remote-control-action_ir32 li#button_mode a {
    left: 218px;
    top: 458px;
    width: 73px;
    height: 73px;		
	background: url(${base_url}/mode.png) no-repeat
}

#remote-control-action_ir32 li#button_icset_plus a {
    left: 45px;
    top: 556px;
    width: 50px;
    height: 50px;		
	background: url(${base_url}/icset_plus.png) no-repeat
}

#remote-control-action_ir32 li#button_icset a {
    left: 113px;
    top: 558px;
    width: 100px;
    height: 44px;		
	background: url(${base_url}/icset.png) no-repeat
}

#remote-control-action_ir32 li#button_icset_minus a {
    left: 230px;
    top: 553px;
    width: 51px;
    height: 52px;		
	background: url(${base_url}/icset_minus.png) no-repeat
}

#remote-control-action_ir32 li#button_on a:hover {
	background: url(${base_url}/on_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_off a:hover {
	background: url(${base_url}/off_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_timer a:hover {
	background: url(${base_url}/timer_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_red a:hover {
	background: url(${base_url}/red_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_green a:hover {
	background: url(${base_url}/green_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_blue a:hover {
	background: url(${base_url}/blue_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_orange a:hover {
	background: url(${base_url}/orange_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_lightgreen a:hover {
	background: url(${base_url}/lightgreen_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_purple a:hover {
	background: url(${base_url}/purple_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_yellow a:hover {
	background: url(${base_url}/yellow_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_lightblue a:hover {
	background: url(${base_url}/lightblue_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_pink a:hover {
	background: url(${base_url}/pink_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_plus a:hover {
	background: url(${base_url}/plus_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_minus a:hover {
	background: url(${base_url}/minus_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_white a:hover {
	background: url(${base_url}/white_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_music_minus a:hover {
	background: url(${base_url}/musicminus_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_music_plus a:hover {
	background: url(${base_url}/musicplus_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_mode a:hover {
	background: url(${base_url}/mode_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_icset_plus a:hover {
	background: url(${base_url}/icset_plus_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_icset a:hover {
	background: url(${base_url}/icset_over.png) no-repeat 0px 0px
}

#remote-control-action_ir32 li#button_icset_minus a:hover {
	background: url(${base_url}/icset_minus_over.png) no-repeat 0px 0px
}  
  `;
}

function getRemoteHtml_action_ir32(config){
 const template = config.remote_template;
 return `

 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-action_ir32">
				<ul>
					<li id="button_on" class="myButton-${template}"><a href="#" title="on"></a></li>
					<li id="button_off" class="myButton-${template}"><a href="#" title="off"></a></li>
					<li id="button_timer" class="myButton-${template}"><a href="#" title="timer"></a></li>					
					<li id="button_red" class="myButton-${template}"><a href="#" title="red"></a></li>
					<li id="button_green" class="myButton-${template}"><a href="#" title="green"></a></li>
					<li id="button_blue" class="myButton-${template}"><a href="#" title="blue"></a></li>
					<li id="button_orange" class="myButton-${template}"><a href="#" title="orange"></a></li>
					<li id="button_lightgreen" class="myButton-${template}"><a href="#" title="lightgreen"></a></li>					
					<li id="button_purple" class="myButton-${template}"><a href="#" title="purple"></a></li>	
					<li id="button_yellow" class="myButton-${template}"><a href="#" title="yellow"></a></li>
					<li id="button_lightblue" class="myButton-${template}"><a href="#" title="lightblue"></a></li>
					<li id="button_pink" class="myButton-${template}"><a href="#" title="pink"></a></li>
					<li id="button_plus" class="myButton-${template}"><a href="#" title="plus"></a></li>
					<li id="button_minus" class="myButton-${template}"><a href="#" title="minus"></a></li>
					<li id="button_white" class="myButton-${template}"><a href="#" title="white"></a></li>
					<li id="button_music_minus" class="myButton-${template}"><a href="#" title="music minus"></a></li>
					<li id="button_music_plus" class="myButton-${template}"><a href="#" title="music plus"></a></li>
					<li id="button_mode" class="myButton-${template}"><a href="#" title="mode"></a></li>					
					<li id="button_icset_plus" class="myButton-${template}"><a href="#" title="icset plus"></a></li>
					<li id="button_icset" class="myButton-${template}"><a href="#" title="icset"></a></li>
					<li id="button_icset_minus" class="myButton-${template}"><a href="#" title="icset minus"></a></li>
				</ul>
			</div>	
		</div>

`;
}

