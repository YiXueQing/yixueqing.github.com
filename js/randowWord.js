var arr = [
    "You may not be interested in war, but war is interested in you.",
    "I love the smell of napalm in the morning.",
    "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.",
    "Dancing is silent poetry.",
    "Bond. James Bond.",
    "Whether you think that you can, or that you can't, you are usually right.",
    "Everybody pities the weak; jealousy you have to earn.",
    "You're gonna need a bigger boat.",
    "You may not be interested in war, but war is interested in you.",
    "The significant problems we face cannot be solved at the same level of thinking we were at when we created them."
];
$(".change-btn").click(function(){
    var sum = parseInt(Math.random() * 10);
    console.log(sum);
    $(".words").html(arr[sum]);
});

$(".upload").click(function(){
    var an = $(".words").html();
    console.log(an);
    window.open('https://twitter.com/intent/tweet?text='+ an );
});


