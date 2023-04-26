let stories = [
    {
        "inputs": 5,
        "category":"sports",
        "word":"chess"
    },
    {
        "inputs": 8,
        "category":"sports",
        "word":"football"
    },
    {
        "inputs": 10,
        "category":"sports",
        "word":"Basketball"
    }
]
$(document).ready(function () {
    displayStory();
})

$(function(){
    $(".input_field").keyup(function(){
        let id=$(this).attr("id");
        let input_number=id.split("_")[1]
        $(".rep_input").eq(input_number).html($(this).val())

    })
    $("#next_story").click(function(){
        displayStory()
    })
})

function displayStory() {
    const story = stories[Math.floor(Math.random() * stories.length)];
    $("#story_title").html(story.title)

    $("#bank_words").empty();
    for (let i = 0; i < story.words.length; i++) {
        let html = `<button class="word_bank_button">${story.words[i]}</button>`
        $("#bank_words").append(html)
    }

    $("#input_fields").empty();
    for (let i = 0; i < story.inputs; i++) {
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${i + 1}"/>`
        $("#input_fields").append(input_html)
    }

    $("#story_text").html(story.story)
}
