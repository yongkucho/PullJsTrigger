/*
<input type="button" value="버튼을 세번 눌러주세요" id="btn" />
var btn = document.getElementById("btn");
var count = 0;
btn.onclick = function(){
    count++;
    if(count == 3){
        EventFunc.trigger("ThirdClick");
    }
};

EventFunc.on("ThirdClick",function(){
    alert("Third Click!!");
    btn.style.display = 'none';
});
*/
var EventFunc = {
    callBacks: {},
    on: function(name, callback){
        this.callBacks[name] = this.callBacks[name] || [];
        this.callBacks[name].push(callback);
    },
    trigger: function(name){
        this.callBacks[name] = this.callBacks[name] || [];
        
        for(var i = 0, len = this.callBacks[name].length; i < len; i++){
            this.callBacks[name][i].apply(this, arguments);
        }
    }
};
