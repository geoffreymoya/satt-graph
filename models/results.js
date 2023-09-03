module.exports = function(sequelize, DataTypes) {
	return sequelize.define('results', {
		id: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true,
		},
		prom: {
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
		},
        timestamp: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'results',
		timestamps: false
	});
};