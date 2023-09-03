
const { gql } = require("apollo-server-express");
const db = require('../database');

const typeDefs = gql`

    input CampaignInputFilter {
      advertiser: String!
    }
    
    input PromInputFilter {
      influencer: String!
    }
    
    

    type Query {
        campaigns(input: CampaignInputFilter): [Campaign]!
        campaign(id: ID!): Campaign
        proms(input:PromInputFilter): [Prom]!
        prom(id: ID!): Prom
        results: [Result]
        result(id: ID!): Result
    }

    type Campaign {
        id: String!
        advertiser: String!
        url: String!
        startDate:Int!
        endDate:Int!
        typeSn:Int!
        viewRatio:Int!
        likeRatio:Int!
        shareRatio:Int!
        token:String!
        totalFunds:String!
        funds:String!
        timestamp: Int!
    }

    type Prom {
        id: String!
        influencer: String!
        campaign:Campaign!
        status:Int!
        reason:String!
        amount:String!
        pendingAmount:String!
        idUser:String!
        idPost:String!
        views:Int!
        likes:Int!
        shares:Int!
    }

    type Result {
        id:String!
        prom:Prom!
        views:Int!
        likes:Int!
        shares:Int!
        timestamp: Int!
    }
`

const resolvers = {
    Query: {
        campaigns: async (obj, args, context, info) => {
            let cmps = db.campaigns.findAll();
            if(!args.input)
                return cmps;
            if(args.input.advertiser) {
               
                cmps = cmps
          .filter((a) => a.advertiser === args.input.advertiser)
            }
            return cmps        
        },
        campaign: async (obj, args, context, info) =>
            db.campaigns.findByPk(args.id),
        proms: async (obj, args, context, info) => { 
            let proms = db.proms.findAll()
            if(!args.input)
                return proms;
                 if(args.input.influencer) {
                proms = proms
          .filter((a) => a.influencer === args.input.influencer)
            }
            return proms        
        },
        prom: async (obj, args, context, info) =>
            db.proms.findByPk(args.id),
        results: async () => db.results.findAll(),
        result: async (obj, args, context, info) =>
            db.results.findByPk(args.id),
    },
    Prom: {
        campaign: async (obj, args, context, info) =>
            db.campaigns.findByPk(obj.campaign)
    },
    Result: {
        prom: async (obj, args, context, info) =>
            db.proms.findByPk(obj.prom)
        }
}
module.exports = {typeDefs,resolvers}
