import React from 'react';
import {simplifyPaginatedResult} from "@tribeplatform/react-sdk/utils";
import {Post} from "@tribeplatform/gql-client/types";
import {useFeed} from "@tribeplatform/react-sdk/hooks";
import {NewsCard} from '../NewsCard/NewsCard';
import InfiniteScroll from 'react-infinite-scroller';

 function  NewsList() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
    } = useFeed({
        fields: {
            reactions: {
                fields: 'all',
                variables: {
                    limit: 10,
                }
            },
            authMemberProps: 'all',
            createdBy: {
                member: 'basic'
            }
        },
        variables: {
            limit: 10,
        }
    })
    const {nodes: news} = simplifyPaginatedResult<Post>(data)

    return (<div className='container mx-auto md:w-5/12 px-4 pt-14 z-30'>
                <InfiniteScroll pageStart={0} loadMore={fetchNextPage} hasMore={hasNextPage} >
                   {news.map((post, i) => ( 
                        <NewsCard  post={post} shadow={true} key={post?.id}  />
                        ))}
                </InfiniteScroll>     
            </div>)          
}
export default NewsList;
