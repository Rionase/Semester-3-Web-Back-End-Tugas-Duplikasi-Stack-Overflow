import {sequelize, DataTypes} from "./model.js";

const Question = sequelize.define("questions", {
    id_question: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
    id_user: DataTypes.INTEGER,
    title: DataTypes.STRING(1000),
    question: DataTypes.STRING(10000),
    tags: DataTypes.STRING(1000)
})

export default Question;