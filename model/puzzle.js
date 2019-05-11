class Puzzle {

    static getAllPuzzles() {
        let sql = `select puzzle.questionid,question.highlight, question.questionvalue from puzzle INNER JOIN question ON puzzle.questionid = question.questionid`;
        return sql;
    }
}
export default Puzzle;