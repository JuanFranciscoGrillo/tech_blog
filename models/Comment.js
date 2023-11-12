const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        commentText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'comment'
    }
);

// Associations
Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

module.exports = Comment;
gi