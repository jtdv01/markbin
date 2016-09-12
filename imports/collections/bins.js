import { Mongo } from 'meteor/mongo';

/*
  Why use function instead of fat arrow?
  If we used fat-arrow, binds this to what surrounding context

  BUT we want to bind the 'this' as Meteor.
  'this' is then Meteor which has methods, and the userId
*/
Meteor.methods({
  'bins.insert': function(){
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },
  'bins.remove':function(binToRemove){
    // just removing a record, not destryoing it
    return Bins.remove(binToRemove);
  },
  'bins.update':function(bin,newContent){
    return Bins.update(bin._id,{$set:{content: newContent}});
  }
});

export const Bins = new Mongo.Collection('bins');
