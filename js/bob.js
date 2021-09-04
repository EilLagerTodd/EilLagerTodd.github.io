const quotes = [{
    english:"We don't make mistakes. We have happy accidents",
    korean:"우린 실수한 게 아닙니다. 행복한 사고가 일어난 것일 뿐이죠"
},
{
    english:"Just beat the devil out of it",
    korean:"붓을 엄청나게 터세요"
},
{
    english:"Take live easy, just let it go",
    korean:"삶을 느긋하게 보내세요, 그저 내버려 두는 겁니다"
},
{
    english:"This is your world, your're the creator, find freedom on the canvas",
    korean:"여긴 당신만의 세상이고, 당신이 창조자니, 캔버스에서 자유를 한번 누려보세요"
},
{
    english:"All you need to paint is a few tools, a little instruction, and a vision in your mind",
    korean:"몇 가지 도구와 작은 지침, 그리고 마음속의 비전만 그리면 됩니다"
},
{
    english:"Talent is a pursued interest. In other words, anything that you're willing to practice, you can do",
    korean:"재능은 추구하는 관심사입니다. 다시 말해서, 당신이 기꺼이 연습할 수 있는 것은 무엇이든 할 수 있습니다"
},
{
    english:"Mix up a little more shadow color here, then we can put us a little shadow right in there. See how you can move things around? You have unlimited power on this canvas -- can literally, literally move mountains",
    korean:"여기서 그림자 색상을 조금 더 섞으면 바로 그림자를 넣을 수 있습니다. 물건을 이리저리 옮길 수 있는 방법이 보이시죠? 이 캔버스에는 무한한 힘이 있습니다. 말 그대로, 말 그대로 산을 움직일 수 있습니다"
},
{
    english:"I can't think of anything more rewarding than being able to express yourself to others through painting. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul",
    korean:"그림으로 자신을 표현할 수 있는 것보다 더 보람 있는 것은 없습니다. 상상력을 발휘하고, 재능으로 실험하고, 창의적이 되는 것, 이런 것들이야말로 진정한 영혼의 창입니다"
},
{
    english:"There's nothing wrong with having a tree as a friend",
    korean:"나무를 친구로 두는 것은 나쁠 것이 없습니다"
},
{
    english:"The job requires you to be a mean, tough person. And I was fed up with it. I promised myself that if I ever got away from it, it wasn't going to be that way anymore",
    korean:"직업은 당신이 비열하고 거친 사람이 될 것을 요구합니다. 그리고 나는 그것에 질렸습니다. 만약 제가 그것을 벗어나게 되면 더 이상 그렇게 되지 않을 거라고 스스로에게 다짐했습니다"
},
{
    english:"Gotta have opposites. Dark and light, light and dark continually in a painting. If you have light on light, you have nothing. If you have dark on dark, you basically have nothing. There we are. You know it's like in life. You've gotta have a little sadness once in a while so you know when the good times comin. i'm waitin on the good times now",
    korean:"항상 반대되는 것이 필요합니다. 어둠과 빛, 빛과 어둠. 그림에는 항상 이 둘이 있어야 하죠. 빛에다가 빛을 더하면 아무것도 생기지 않습니다. 어둠에 어둠을 더해도 마찬가지로 아무것도 없죠. 삶도 마찬가지입니다. 가끔씩 슬픔이 있어줘야 행복한 시기가 올 때, 느낄 수 있죠. 저도 지금은 행복한 시기를 기다리는 중입니다"
},
{
    english:"That easy",
    korean:"참 쉽죠?"
}

]

const en = document.querySelector("#bob span:first-child");
const ko = document.querySelector("#bob span:last-child");


function Bobsquote() {

    const printquo = quotes[Math.floor(Math.random() * quotes.length)]
    en.innerText = printquo.english
    ko.innerText = `\n ${printquo.korean}`

}

Bobsquote()
setInterval(Bobsquote, 300000);