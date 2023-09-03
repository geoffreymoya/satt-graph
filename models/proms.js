module.exports = function(sequelize, DataTypes) {
	return sequelize.define('proms', {
		id: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true,
		},
        influencer: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		campaign: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        status: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        reason: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        amount: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        pendingAmount: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        idUser: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        idPost: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		views: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        likes: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        shares: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'proms',
		timestamps: false
	});
};