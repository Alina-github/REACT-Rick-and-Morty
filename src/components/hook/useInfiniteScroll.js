import { useState, useEffect } from "react"


const useInfiniteScroll = (callback) => {
    const [isFetching, setIsFetching] = useState(false);

    function isScrolling() {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1)
        {setIsFetching(true)}
        else return
    }

    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        callback();
    }, [isFetching]);

    return [isFetching, setIsFetching];
};

export default useInfiniteScroll