module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('regs', { 
      id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true
     },
     device_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'devices',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
     },
     data: {
       type: Sequelize.JSON,
       allowNull: false
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
    await queryInterface.dropTable('regs');
  }
};
