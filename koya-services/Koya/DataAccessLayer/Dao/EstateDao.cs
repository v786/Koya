using System;
using System.Collections.Generic;
using System.Text;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Linq;
using DataAccessLayer.Entity;
namespace DataAccessLayer.Dao
{
    public class EstateDao
    {
        private MongoClient mongoClient;
        private IMongoCollection<Estate> estateCollection;

        public EstateDao() {
            mongoClient = new MongoClient("mongodb://localhost:27017");
            var database = mongoClient.GetDatabase("Koya");
            estateCollection = database.GetCollection<Estate>("estate");
        }

        public List<Estate> getAll() {
            List<Estate> estates;
            try
            {
                estates = estateCollection.AsQueryable<Estate>().ToList();
            }
            catch (Exception) {
                estates = new List<Estate>();
            }
            return estates;
        }
    }
}
