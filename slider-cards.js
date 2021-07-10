var text = [
    {
        id:"010",
        gname:"God of WAR",
        gcategory:"Adventure",
        gprice:"21,000",
        gimage:"god of war.jpg", 

    },

    {
        id:"020",
        gname:"Call Of Duty",
        gcategory:"Action",
        gprice:"21,000",
        gimage:"cod.jpg", 

    },

    {
        id:"030",
        gname:"FIFA21",
        gcategory:"Sport",
        gprice:"21,000",
        gimage: "fifa.jpg",

    },

    {
        id:"040",
        gname:"NBA 2K21",
        gcategory:"Sport",
        gprice:"21,000",
        gimage: "nba.jpg",

    },

    {
        id:"050",
        gname:"Bloodborne",
        gcategory:"Adventure",
        gprice:"21,000",
        gimage: "bb.jpg",

    },

    {
        id:"060",
        gname:"Rise Of The Tomb Raider",
        gcategory:"Adventure",
        gprice:"21,000",
        gimage: "tomb.jpg",

    },

    {
        id:"070",
        gname:"Fortnite",
        gcategory:"Action",
        gprice:"21,000",
        gimage: "fort.jpg"

    },

    {
        id:"080",
        gname:"Fortnite",
        gcategory:"Action",
        gprice:"21,000",
        gimage: "nite.jpg"
    }

    
];

var str = ""
text.map((e, i) => {
str +="<div id='maincard' onclick='display()'>" +
      "<p class='gname'><b>" + e.gname + "</b></p>" +
      "<p class='price'><b>" + e.gprice + "</b></p>" +
       "<a href="+ e.url +"> <img src=" + e.gimage +" alt='Avatar' /> </a>" +
      "</div>";
});
document.getElementsByClassName("next2").innerHTML = str;