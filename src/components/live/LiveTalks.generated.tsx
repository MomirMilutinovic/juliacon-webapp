import * as Types from "../../apollo/__generated__/types";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";

export type LiveTalksQueryVariables = Types.Exact<{
  day: Types.Scalars["String"];
}>;

export type LiveTalksQuery = { readonly __typename?: "Query" } & {
  readonly talks: ReadonlyArray<
    { readonly __typename?: "Talk" } & LiveTalksTalkFragment
  >;
};

export type LiveTalksTalkFragment = { readonly __typename?: "Talk" } & Pick<
  Types.Talk,
  "id" | "title" | "startTime" | "endTime" | "videoCode" | "abstract"
> & {
    readonly room: { readonly __typename?: "Room" } & Pick<Types.Room, "id">;
  };

export const LiveTalksTalkFragmentDoc = gql`
  fragment LiveTalksTalk on Talk {
    id
    title
    startTime
    endTime
    videoCode
    abstract
    room {
      id
    }
  }
`;
export const LiveTalksDocument = gql`
  query LiveTalks($day: String!) {
    talks(day: $day) {
      ...LiveTalksTalk
    }
  }
  ${LiveTalksTalkFragmentDoc}
`;

/**
 * __useLiveTalksQuery__
 *
 * To run a query within a React component, call `useLiveTalksQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiveTalksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveTalksQuery({
 *   variables: {
 *      day: // value for 'day'
 *   },
 * });
 */
export function useLiveTalksQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    LiveTalksQuery,
    LiveTalksQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<LiveTalksQuery, LiveTalksQueryVariables>(
    LiveTalksDocument,
    baseOptions
  );
}
export function useLiveTalksLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    LiveTalksQuery,
    LiveTalksQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<LiveTalksQuery, LiveTalksQueryVariables>(
    LiveTalksDocument,
    baseOptions
  );
}
export type LiveTalksQueryHookResult = ReturnType<typeof useLiveTalksQuery>;
export type LiveTalksLazyQueryHookResult = ReturnType<
  typeof useLiveTalksLazyQuery
>;
export type LiveTalksQueryResult = ApolloReactCommon.QueryResult<
  LiveTalksQuery,
  LiveTalksQueryVariables
>;
