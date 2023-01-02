import React, { useEffect } from 'react';

const useTitle = (title:any) => {
    useEffect(() => {
        document.title = `${title}-Dorkar Shop`
    }, [title]);
};

export default useTitle;