/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import BlogTemplate from "components/templates/BlogTemplate";
import { useAppDispatch } from "store/hooks";
import { getLocalStorage } from "services/common/storage";
import { CommentServices, PostServices } from "services/test/type";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import {  useQuery } from "@tanstack/react-query";
import { getTestCommentService, getTestPostsService } from "services/test";
import { DEFAULT_QUERY_OPTION } from "utils/constants";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const [dataposts, setDataPosts] = useState<PostServices[]>([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [datacomments, setDataComments] = useState<CommentServices[]>([]);
    const setNavigate = useNavigate();
    const [pagePagi, setPagePagi] = useState(1);
    const { data: dataPosts } = useQuery(["posts"], () => getTestPostsService(), {
        ...DEFAULT_QUERY_OPTION,
    });
    const { data: dataComments } = useQuery(["comments"], () => getTestCommentService(), {
        ...DEFAULT_QUERY_OPTION,
    });
    useEffect(() => {
        if (dataComments && dataPosts) {
            dispatch({ type: "GET_POSTS_REQUESTED", payload: dataPosts });
            dispatch({ type: "GET_COMMENTS_REQUESTED", payload: dataComments });
        }
    }, [dispatch, dataPosts, dataComments]);
    useEffect(() => {
        const persistRoot = getLocalStorage("persist:root");
        if (persistRoot) {
            if (
                JSON.parse(JSON.parse(persistRoot).posts) &&
                JSON.parse(JSON.parse(persistRoot).comments)
            ) {                
                setDataPosts(JSON.parse(JSON.parse(persistRoot).posts));
                setDataComments(JSON.parse(JSON.parse(persistRoot).comments));
            }
        }
    }, [localStorage]);
    
    const postFilter = useMemo(() => {
        if (  searchTitle.length > 0)  {
            const filter = dataposts.filter((item) => item.title.includes(searchTitle));
            return filter;
        }
        return dataposts;
    }, [searchTitle, dataposts]);

    const dataBlogPost = useMemo(
        () => ({
            logo: "logo",
            tab: "Blogs",
            author: "Adam",
            blog:
                (postFilter &&
                    postFilter.length > 0 &&
                    postFilter
                        .map((item, index) => ({
                            author: `Fake name ${index + 1}`,
                            title: item?.title,
                            createdAt: "2019",
                            id: item?.id.toString(),
                            replyData:
                                (datacomments &&
                                    datacomments.map((itemInfo, idx) => ({
                                        author: `Fake name ${idx + 1}`,
                                        createAt: `${2019 + idx}`,
                                        avatar: "https://i.picsum.photos/id/385/200/200.jpg?hmac=dLlnX_YjZRYLV8lZ45w0UOuKuI1MiXWjEw5DZMnKNbg",
                                        description: itemInfo?.body,
                                    }))) ||
                                [],
                            description: item?.body?.substring(0, 100),
                            handleRouter: () => {
                                setNavigate(`detail/${item.id}`);
                            },
                        }))
                        .splice(0, 97)) ||
                [],
        }),
        [postFilter, datacomments, setNavigate],
    );

    return (
        <div className=''>
            <div className='my-3'>
                <Container>
                    <input
                        type='text'
                        onChange={(e) => setSearchTitle(e.target.value)}
                        className=''
                    />
                </Container>
            </div>
            <BlogTemplate
                {...dataBlogPost}
                pagePagi={pagePagi}
                handleChangePage={(e) => setPagePagi(e)}
            />
        </div>
    );
};

export default Home;
