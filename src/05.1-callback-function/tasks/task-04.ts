/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */


function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    scores.forEach(callback);
}

function checkPassed(score: number): void {
    console.log(score >= 70 ? `${score}: Passed` : `${score}: Failed`);
}

function convertGrade(score: number): void {
    let grade: string;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    console.log(`${score}: Grade ${grade}`);
}

function addBonus(score: number): void {
    console.log(`${score}: ${score + 5}`);
}

function checkExcellent(score: number): void {
    console.log(
        score > 90
            ? `${score}: Excellent`
            : `${score}: Reguler`
    );
}

processScores(scores, checkPassed);
processScores(scores, convertGrade);
processScores(scores, addBonus);
processScores(scores, checkExcellent);