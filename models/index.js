const User = require('./User');
const Review = require('./Review');
const Item = require('./Item');
const Request = require('./Request');

User.hasMany(Item, {
  foreignKey: 'user_id',
  as: 'ownedItems',
  onDelete: 'CASCADE',
});
Item.belongsTo(User, { foreignKey: 'user_id', as: 'owner' });

User.hasMany(Item, {
  foreignKey: 'borrowed_by',
  as: 'borrowedItems',
  onDelete: 'SET NULL',
});
Item.belongsTo(User, { foreignKey: 'borrowed_by', as: 'borrowedBy' });

Item.hasMany(Review, { foreignKey: 'item_id', onDelete: 'CASCADE' });
Review.belongsTo(Item, { foreignKey: 'item_id' });

User.hasMany(Request, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Request.belongsTo(User, { foreignKey: 'user_id' });

Item.hasMany(Request, { foreignKey: 'item_id', onDelete: 'CASCADE' });
Request.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = { User, Review, Item, Request };
