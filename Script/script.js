var app = new Vue({
  el: '#app',
  data: {
    stories: [{ name: "paddmeister", img: "https://instagram.fbma1-1.fna.fbcdn.net/vp/7c44b7abe9cb4f75f8235202e4d45f8a/5B36009D/t51.2885-19/s320x320/13743247_123176468123677_1998054542_a.jpg", time: "14 sekunder sedan", read: false},
              { name: "larssonrickard", img: "https://instagram.fbma1-1.fna.fbcdn.net/vp/45f869b4d01c8591484d8177f38172e8/5B37D36E/t51.2885-19/s320x320/18723516_1208636345912148_6765758764734742528_a.jpg", time: "17 minuter sedan", read: true},
              { name: "larsson.victor", img: "https://instagram.fbma1-1.fna.fbcdn.net/vp/b27b4ec506f1cb490dc5e9f4e23eb7e0/5B31CABD/t51.2885-19/s320x320/17932071_380181192382822_4412749455468527616_a.jpg", time: "2 timmar sedan", read: true}
            ],

    posts: [{ name: "paddmeister", img: "https://instagram.fbma1-1.fna.fbcdn.net/vp/7c44b7abe9cb4f75f8235202e4d45f8a/5B36009D/t51.2885-19/s320x320/13743247_123176468123677_1998054542_a.jpg", time: "14 sekunder sedan", postImg: "https://i.ytimg.com/vi/RPGLcx6Fy_0/maxresdefault.jpg"},
              { name: "larssonrickard", img: "https://instagram.fbma1-1.fna.fbcdn.net/vp/45f869b4d01c8591484d8177f38172e8/5B37D36E/t51.2885-19/s320x320/18723516_1208636345912148_6765758764734742528_a.jpg", time: "17 minuter sedan", postImg: "https://cdn.theatlantic.com/assets/media/img/photo/2017/09/2017-national-geographic-nature-pho/n02_010100105310839105/main_900.jpg?1506446372"},
              { name: "larsson.victor", img: "https://instagram.fbma1-1.fna.fbcdn.net/vp/b27b4ec506f1cb490dc5e9f4e23eb7e0/5B31CABD/t51.2885-19/s320x320/17932071_380181192382822_4412749455468527616_a.jpg", time: "2 timmar sedan", postImg: "http://press.nationalgeographic.com/files/2013/08/NationalGeographic_1184784-smaller.jpg"}
            ]
  }
})
