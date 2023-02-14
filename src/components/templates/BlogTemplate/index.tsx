import Image from "components/atoms/Image";
import Pagination from "components/organisms/Pagination";
import React, { useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";

interface BlogTemplateProps {
    logo?: string;
    tab?: string;
    author?: string;
    blog?: {
        id: string;
        author: string;
        title: string;
        createdAt: string;
        description: string;
        replyData?: {
            author?: string;
            createAt?: string;
            avatar?: string;
            description?: string;
        }[];
        handleRouter?: () => void;
    }[];
    handleChangePage?: (e: number) => void;
    pagePagi: number;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({
    logo,
    pagePagi,
    tab,
    author,
    blog,
    handleChangePage,
}) => {
    const [openComment, setOpenComment] = React.useState("");
    const blogPagi = useMemo(() => {
        if (blog) {
            return blog.slice((pagePagi - 1) * 5, (pagePagi - 1) * 5 + 5);
        }
        return [];
    }, [blog, pagePagi]);
    return (
        <div className='t-BlogTemplate'>
            <Container>
                <div className='my-3 t-BlogTemplate_navigate'>
                    <Row>
                        <Col lg={5} md={4} sm={4}>
                            <div className='text-center'>{logo} </div>
                        </Col>
                        <Col lg={2} md={4} sm={4}>
                            <div className='text-center'>{tab}</div>
                        </Col>
                        <Col lg={5} md={4} sm={4}>
                            <div className='text-center'>{author}</div>
                        </Col>
                    </Row>
                </div>
                {blogPagi &&
                    blogPagi?.length > 0 &&
                    blogPagi?.map((i, index) => (
                        <div
                            style={{
                                paddingBottom: "32px",
                                paddingTop: "32px",
                                borderBottom: " 1px solid gray",
                            }}
                            key={`ok-${index.toString()}`}
                        >
                            <div style={{ cursor:"pointer" }} key={`keyssssssss-${index.toString()}`}>
                                <h2
                                    className='my-3'
                                    role='presentation'
                                    onClick={i?.handleRouter}
                                    onKeyDown={i?.handleRouter}
                                >
                                    <small>{`${i?.id}-${i?.title}`}</small>
                                </h2>
                                <div className='my-3'>
                                    <span className='d-block mr-4'>Author : {i?.author}</span>
                                    <span
                                        style={{
                                            color: "red",
                                        }}
                                        className='d-block text-red'
                                    >
                                        Created At : {i?.createdAt}
                                    </span>
                                </div>
                            </div>
                            <div className='my-2'>{i?.description}</div>
                            <div className=' my-2'>
                                <div
                                    role='button'
                                    onKeyDown={(e) => console.log(e)}
                                    onClick={() => {
                                        if (openComment === `open-${index.toString()}`) {
                                            setOpenComment("");
                                        } else {
                                            setOpenComment(`open-${index.toString()}`);
                                        }
                                    }}
                                    className='mb-2 d-flex '
                                >
                                    <div
                                        className='me-2 '
                                        style={{
                                            color: "blue",
                                            width: "max-content",
                                        }}
                                    >
                                        {i?.replyData?.length || 0}
                                    </div>
                                    <div className=''>replies</div>
                                </div>

                                {openComment === `open-${index.toString()}` &&
                                    i.replyData &&
                                    i.replyData.length > 0 &&
                                    i.replyData.map((item, idx) => (
                                        <div className='my-4' key={`key-${idx.toString()}`}>
                                            <Row>
                                                <Col lg={1}>
                                                    <div className='t-BlogTemplate_comment w-100 h-auto'>
                                                        <Image
                                                            src={item?.avatar || ""}
                                                            ratio='1x1'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col lg={10}>
                                                    <div className='d-flex my-2'>
                                                        <div
                                                            style={{
                                                                color: "red",
                                                            }}
                                                            className='me-2'
                                                        >
                                                            {item.author}
                                                        </div>
                                                        <div className='mr-2'>{item.createAt}</div>
                                                    </div>
                                                    <div className=''>{item.description}</div>
                                                </Col>
                                            </Row>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}

                {blog && blog?.length > 0 && (
                    <div className='my-3'>
                        <Pagination
                            totalPage={Math.ceil(Number(blog?.length ) / 5) || 100}
                            handleChangePage={handleChangePage}
                        />
                    </div>
                )}
            </Container>
        </div>
    );
};

export default BlogTemplate;
