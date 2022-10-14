import { useEffect } from "react"

const useDocTitle = (title?: string) => {
  const docTitle = (title) ? `${title} - Ito Horrors` : 'Ito Horrrors';

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);
}

export default useDocTitle;
