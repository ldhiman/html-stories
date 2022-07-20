class Story{
    constructor(storylist, sec_time){
        this.storylist = storylist;
        this.sec_time = sec_time;
        sessionStorage.setItem("story-list", JSON.stringify(this.storylist));
    }
    init(){ 
        $(".story-holder").empty();
        for(var i=0; i< this.storylist.length; i++){
            var data = this.storylist[i];
            var lastStatus = data.status[data.status.length - 1].img;
            $(".story-holder").append(`
                <button id="${data.time_stamp}" class="story-container">
                    <img src="${lastStatus}">
                    <div>${data.name}</div>
                </button>
            `);
        }
    }   
}

function showStory(){
}

storylist = [{name: "Dhiman",
                status: [{img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",time_stamp: 1658302265697},
             {img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",time_stamp: 1658302273888},
             ],
             time_stamp:1658302281992
             },
             {name: "Lucky",
                status: [{img:"https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",time_stamp: 1658302281992}],
             time_stamp:1658302281992
             }
            ];

story = new Story(storylist, 30);
story.init();   