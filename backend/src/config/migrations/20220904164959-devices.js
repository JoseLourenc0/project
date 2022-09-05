module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('devices', { 
      id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true
     },
     name: {
       type: Sequelize.STRING(45),
       allowNull: false,
       unique: true
     },
     created_at: {
       type: Sequelize.DATE,
       allowNull: false
     },
     updated_at: {
       type: Sequelize.DATE,
       allowNull: true
     }
     })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('devices');
  }
};
