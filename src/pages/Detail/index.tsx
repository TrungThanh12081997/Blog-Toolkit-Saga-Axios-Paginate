import React, { useEffect, useState } from "react";
import DetailComponent from "components/templates/DetailComponent";
import { useParams, useSearchParams } from "react-router-dom";
import { getLocalStorage } from "services/common/storage";
import { PostServices } from "services/test/type";

const Detail: React.FC = () => {
    const [searchParamsm] = useSearchParams();
    const params = useParams();
    const [dataPosts, setDataPosts] = useState<PostServices[]>([]);

    useEffect(() => {
        const persistRoot = getLocalStorage("persist:root");
        if (persistRoot) {
            setDataPosts(
                JSON.parse(JSON.parse(persistRoot)?.posts).filter(
                    (item: PostServices) => item?.id?.toString() === params.slug,
                ),
            );
        }
    }, [params]);

    return (
        <DetailComponent
            id={searchParamsm.get("id") || ""}
            title={dataPosts[0]?.title}
            description={dataPosts[0]?.body || ""}
            author={`Fake name ${dataPosts[0]?.id || 0 + 1}`}
        />
    );
};

export default Detail;
