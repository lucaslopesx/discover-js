function getScore(score) {
    let A = score >= 90 && score <= 100;
    let B = score >= 80;
    let C = score >= 70;
    let D = score >= 60;
    let F = score < 60 && score >= 0;

    let scoreFinal;

    if (A) {
        scoreFinal = "A";
    } else if (B) {
        scoreFinal = "B";
    } else if (C) {
        scoreFinal = "C";
    } else if (D) {
        scoreFinal = "D";
    } else if (F) {
        scoreFinal = "F";
    } else {
        scoreFinal = "Nota inválida";
    }

    return scoreFinal;
}

console.log(getScore(101));
console.log(getScore(90));
console.log(getScore(-90));
console.log(getScore(1));
console.log(getScore(60));
console.log(getScore(75));
console.log(getScore(85));
console.log(getScore(99));
console.log(getScore(100));
