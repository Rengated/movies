import { useEffect, useState } from "react";

interface useCommentsProps {
  id: string | undefined | [];
}

export const useComments = ({ id }: useCommentsProps) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(`${id}`);
    if (data) {
      setComments(JSON.parse(data).map((item: string) => JSON.parse(item)));
    }
  }, [id]);

  return comments;
};
