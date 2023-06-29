import {sequelize, DataTypes} from "./model.js";

const Answer = sequelize.define("answers", {
    id_question:   DataTypes.INTEGER ,
    id_user:  DataTypes.INTEGER ,
    answer: DataTypes.STRING(10000)
})

export default Answer