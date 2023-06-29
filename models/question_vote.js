import {sequelize, DataTypes} from "./model.js";

const Question_Vote = sequelize.define("question_votes", {
    id_question: { primaryKey: true, type: DataTypes.INTEGER },
    id_user: { primaryKey: true, type: DataTypes.INTEGER },
    status: DataTypes.STRING
})

export default Question_Vote