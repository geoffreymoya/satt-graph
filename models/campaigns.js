module.exports = function(sequelize, DataTypes) {
	return sequelize.define('campaigns', {
		id: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true,
		},
        advertiser: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        startDate: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        endDate: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        typeSn: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        viewRatio: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        likeRatio: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        shareRatio: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		},
        token: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        funds: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        totalFunds: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
        timestamp: {
			type: DataTypes.INTEGER(12).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'campaigns',
		timestamps: false
	});
};