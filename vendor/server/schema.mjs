/**
 * Basic GraphQL schema for the Newsfeed app.
 * You must run `yarn print-schema` in `server/` and then restart `npm run dev`
 * after modifying this file. This regenerates the GraphQL schema.
 */

import { appResolver, vendorResolver } from "./resolvers.mjs";

import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInterfaceType,
  GraphQLDeferDirective,
  GraphQLStreamDirective,
  specifiedDirectives,
} from "graphql";

const NodeInterface = new GraphQLInterfaceType({
  name: "Node",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
});

const AppFieldWithoutSensitiveDataType = new GraphQLObjectType({
  name: "AppFieldWithoutSensitiveData",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    logoUrl: { type: GraphQLString },
  },
});

const VendorAgreementType = new GraphQLObjectType({
  name: "VendorAgreementField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    sourceAppInstanceIdentifier: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: GraphQLString },
    currency: { type: new GraphQLNonNull(GraphQLString) },
    isAutoRenewal: { type: new GraphQLNonNull(GraphQLBoolean) },
    totalCost: { type: GraphQLString },
  },
});

const VendorFieldType = new GraphQLObjectType({
  name: "VendorField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    app: { type: AppFieldWithoutSensitiveDataType, resolve: appResolver },
    agreements: { type: new GraphQLList(VendorAgreementType) },
  },
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    vendor: {
      type: VendorFieldType,
      resolve: vendorResolver,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
    },
    node: {
      type: NodeInterface,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  types: [VendorFieldType],
  directives: [
    ...specifiedDirectives,
    GraphQLDeferDirective,
    GraphQLStreamDirective,
  ],
});
