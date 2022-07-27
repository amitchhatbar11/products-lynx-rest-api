module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isDeleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productViewed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdDate: {
        type: DataTypes.TIME,
        defaultValue: DataTypes.NOW,
      },
      updatedDate: {
        type: DataTypes.TIME,
        defaultValue: DataTypes.NOW,
      },
      deletedDate: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );
  return product;
};
