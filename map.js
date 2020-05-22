// Create a GeoFirestore reference
const geofirestore = new GeoFirestore(firestore);

// Create a GeoCollection reference
const geocollection = geofirestore.collection('responses');

// Create a GeoQuery based on a location
const query= geocollection.near({ center: new firebase.firestore.GeoPoint(-1.2901934,36.8933537), radius: 1000 });

// Get query (as Promise)
query.get().then((value) => {
  // All GeoDocument returned by GeoQuery, like the GeoDocument added above
  console.log(value.docs);
});

// the above value is used to query your database and can be replaced by common field in your database.
