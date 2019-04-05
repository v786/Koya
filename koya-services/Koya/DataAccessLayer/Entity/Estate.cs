using System;
using System.Collections.Generic;
using System.Text;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
namespace DataAccessLayer.Entity
{
    public class Estate
    {
        [BsonId]
        public ObjectId _id
        {
            get;
            set;
        }

        [BsonElement("bedroom")]
        public int _bedroom
        {
            get;
            set;
        }

        [BsonElement("bathroom")]
        public int _bathroom
        {
            get;
            set;
        }

        [BsonElement("area")]
        public int _area
        {
            get;
            set;
        }

        [BsonElement("cost")]
        public int _cost
        {
            get;
            set;
        }

        [BsonElement("advance")]
        public int _advance
        {
            get;
            set;
        }

        [BsonElement("rating")]
        public float _rating
        {
            get;
            set;
        }

        [BsonElement("amenities")]
        public String _amenities
        {
            get;
            set;
        }

        [BsonElement("isBooked")]
        public int _isBooked
        {
            get;
            set;
        }

    }
}
