// useDocumentTitle.js
import { useEffect } from "react";

export function useDocumentTitle(title: string, appName = "QFA") {
  useEffect(() => {
    document.title = `${title} - ${appName}`;

    // Optional: restore original title on unmount
    return () => {
      document.title = appName;
    };
  }, [title, appName]);
}
