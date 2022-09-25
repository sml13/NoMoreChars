function LogCleaner() {
    var TextPasted = document.getElementById("logPasted");
    var CharacterPicked = document.getElementById("CharPicked");
    let UserCharSelected = CharacterPicked.value;
    let CleanText = TextPasted.value;
    CleanText = CleanText.toString().replaceAll(UserCharSelected,'');
    console.log(CleanText)
    navigator.clipboard.writeText(CleanText);
}