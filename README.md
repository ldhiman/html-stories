# html-stories
Awseome instagram and whatsapp like stories in html with pure javascript and css

Note: JQuery is needed;

1. create a array like:
    
    storylist = [
     //1st person status
    {name: "person 1",
      //statuses
                status: [{img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", type:"image",time_stamp: 1658302265697},
             {img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg", type:"image",time_stamp: 1658302273888},
             ],
             time_stamp:1658302281992
             },
             
      //2nd person status       
      {name: "person 1",
                //statuses
                status: [{img:"https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif", type:"image",time_stamp: 1658302281992}],
             time_stamp:1658302281992
             }
            ];

2. create a div with class as story-holder like:  [<div class="story-holder"></div>]
        


3. call a class function like:
        story = new Story(storylist (array of stories), 30 (number of second));
        story.init();   // init to add story to story-holder


