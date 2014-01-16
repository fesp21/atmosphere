Meteor.publish('packageMetadata', function() {
  return Packages.find({
    visible: { $ne: false }
  }, {
    fields: {name: true, description: true, latest: true, updatedAt: true}
  });
});

Meteor.publish('package', function(name) {
  return Packages.find({
    name: name
  });
});

// for meteorite
Meteor.publish('packages', function(lastModified) {
  // Logs.insert({
  //   name: 'publish.packages',
  //   userId: this.userId,
  //   stamp: new Date()
  // });
  
  var query = {
    visible: {$ne: false}
  };
  
  if (lastModified)
    query.lastModified = {$gt: lastModified};

  return Packages.find(query, {
    sort: {updatedAt: -1}
  });
});

Meteor.publish('allPackages', function() {

  // Logs.insert({
  //   name: 'publish.allPackages',
  //   userId: this.userId,
  //   stamp: new Date()
  // });

  return Packages.find({}, {
    sort: {
      updatedAt: -1
    }
  });
});
